import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import { getCityDate, getCityTime } from "../../utils/timeUtils";



export default function InfoBox({info}){
    if (!info) return null;
    return(
        <div >
            {info &&<div  className='cardContainer'>
            <Card sx={{ maxWidth: 350}}>
                <div className='weather-icon'>
                    <img src={info.iconUrl} className='weather-img'></img>
                    <div className='timeUtils'>
                        <h2>{info.temp} &deg;{info.unit === "metric" ? "C" : "F"}</h2>
                        <p>{getCityDate(info.timezone)}</p>
                        <p>{getCityTime(info.timezone)}</p>
                        
                    </div>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                    <p>The weather can be described as <i>{info.weather} </i></p>
                    
                    <p>Humidity = {info.humidity}%</p>
                    <p>Min Temperature = {info.minTemp}&deg;{info.unit === "metric" ? "C" : "F"}</p>
                    <p>Max Temperature = {info.maxTemp}&deg;{info.unit === "metric" ? "C" : "F"}</p>
                    <p>feels like = {info.feelsLike}&deg;{info.unit === "metric" ? "C" : "F"}</p>
                    <p>Wind Speed = {info.wind} {info.unit === "metric" ? "m/s" : "mph"}</p>
                    
                    </Typography>
                </CardContent>
            </Card>
            </div>}
        </div>
    )
}