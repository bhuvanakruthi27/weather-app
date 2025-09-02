import { getWeatherInfo } from '../../services/getWeatherInfo';
import {getLocationCoord} from '../../services/getLocationCoord';
import { getCityNameByCoord} from '../../services/getCityNameByCoord';

   export let handleSearch=async (
    event,
    city,
    unit,
    setCity,
    setError,
    updateInfo,
    setLastCity
    )=>{
       try{ 
        event.preventDefault();
        let trimmedCity = city.trim();
        let newInfo=await getWeatherInfo(trimmedCity,unit);
        if(!newInfo || newInfo.error){
             setError(true);
             setCity("");
             updateInfo(null);
             return;
        }
        setError(false);
        updateInfo(newInfo);
        setLastCity(trimmedCity);
        setCity("");
        }catch(err){
            setError(true);
            updateInfo(null);
        }

    }

  export const handleCurrentLocation = async (unit,setError,updateInfo) => {
            try {
                const { lat, lon } = await getLocationCoord(); 

                const city= await getCityNameByCoord(lat,lon); 

               const newInfo = await getWeatherInfo(city, unit);
                if (!newInfo || newInfo.error) {
                    setError(true);
                    updateInfo(null);
                    return;
                }

                setError(false);
                updateInfo(newInfo);
            } catch (err) {
                setError(true);
                console.error(err.message);
            }
 };