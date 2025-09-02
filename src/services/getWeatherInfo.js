let API_URL="https://api.openweathermap.org/data/2.5/weather";
let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export const getWeatherInfo=async(cityName,selectedUnit)=>{
        try{
            let response=await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=${selectedUnit}`);
            let jsonResponse=await response.json();
            if(jsonResponse.cod!==200 ){
                return {error:jsonResponse.message};
            }
            let result={
                city:jsonResponse.name,
                weather:jsonResponse.weather[0].description,
                weatherMain:jsonResponse.weather[0].main,
                temp:jsonResponse.main.temp,
                maxTemp:jsonResponse.main.temp_max, 
                minTemp:jsonResponse.main.temp_min, 
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                timezone:jsonResponse.timezone,
                wind: jsonResponse.wind.speed,
                lon: jsonResponse.coord.lon,
                unit:selectedUnit,
                iconUrl: `https://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`
            }
            return result;
        }catch(err){
            throw err;
        }
    }


