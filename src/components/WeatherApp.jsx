    import InfoBox from "./InfoBox/InfoBox";
    import SearchBox from "./searchBox/SearchBox";
    import { useState } from "react";
   

    export default function WeatherApp(){
        let[weatherInfo,setWeatherInfo]=useState(null);

        let updateInfo=(newInfo)=>{
            setWeatherInfo(newInfo);
        }

        return(
            <div className="WeatherApp.css">
                <h1 style={{textAlign:"center"}}>Weather App </h1>
                <SearchBox updateInfo={updateInfo}></SearchBox>
                <InfoBox info={weatherInfo}></InfoBox>
            </div>

        )
    }