import TextField from '@mui/material/TextField';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button'
import "./SearchBox.css"
import { useEffect, useState } from 'react';
import UnitSwitch from '../UnitSwitch/UnitSwitch.jsx';
import { getWeatherInfo} from '../../services/getWeatherInfo.js';
import { handleSearch,handleCurrentLocation} from './handleSearchLocation.js';


export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let [error,setError]=useState(false);
    let[unit,setUnit]=useState("metric");
    let [lastCity, setLastCity] = useState("");
    let[isCurrentLocation,setIsCurrentlocation]=useState(false);

   useEffect(() => {
        if (!lastCity && !isCurrentLocation) return;

        (async () => {
            if (isCurrentLocation) {
                await handleCurrentLocation(unit, setError, updateInfo);
            } else {
                let newInfo = await getWeatherInfo(lastCity, unit);
                if (!newInfo || newInfo.error) {
                    setError(true);
                    updateInfo(null);
                    return;
                }
                setError(false);
                updateInfo(newInfo);
            }
        })();
    }, [unit]);

    return(
        <div className="SearchBox">
            <h3>Search for the weather  </h3>
            <Button variant="outlined" 
                    style={{marginTop:"10px"}} 
                    startIcon={<LocationOnRoundedIcon />}
                    onClick={() => {
                            setIsCurrentlocation(true); // Current location mode
                            handleCurrentLocation(unit, setError, updateInfo);
                    }}
                >
                    Current Location
                </Button>
                <br></br><br></br>
            <form  onSubmit={(event)=>{
                handleSearch(event, city,unit,setCity,setError,updateInfo,setLastCity );
                setIsCurrentlocation(false);}
            }>
                <div className='searchBar'>
                    <TextField id="city" 
                        label="City Name" 
                        variant="outlined" 
                        value={city} 
                        onChange={(event)=>setCity(event.target.value)} 
                        required
                        size="small"
                        style={{ minWidth: '200px' }} />
                
                    <Button variant="contained"
                             type="submit" 
                             size="medium"
                             startIcon={<SearchOutlinedIcon/>}
                    > Search </Button>
                </div>
                
                {error && <p style={{color:"red"}}>City not found. Please check the name.</p>}
            </form>
            {(lastCity || isCurrentLocation) && !error && <UnitSwitch unit={unit} setUnit={setUnit}></UnitSwitch>}

        </div> 
        
    )
}