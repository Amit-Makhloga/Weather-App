import SearchBox from './SearchBox'
import Infobox from './InfoBox'
import { useState } from 'react';
export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo} />
        </>
    )
}