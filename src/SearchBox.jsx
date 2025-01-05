import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import "./SearchBox.css"
import { useState } from "react"

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_kEY = "24cd91a61b9519b7bf897c8e422c9ae5";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_kEY}&units=metric`); 
            let jsonResponse = await response.json();
            console.log(jsonResponse)
    
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result)
            return result;
        } catch(err){
            throw err;
        }

    }


    let handleChange = (event) =>{
        setCity(event.target.value)
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo(); 
            updateInfo(info)  
        } catch (err){
            setError(true)
        }
    }


    return(
        <div className="SearchBox">
            <h3>Search for weather</h3>
            <form action="" onSubmit={handleSubmit }>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /> <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place found!</p>} 
            </form>
        </div>
    )
}