import convert from "convert-units";
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from "./../constants/weathers";

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(1);
}

const getWeatherState = weather => {
    const {id} = weather;
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    }
    return CLOUD;
}

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const speed = weather_data.wind.speed;
    const weatherState = getWeatherState(weather_data.weather[0]);

    const data = {
        temperature: parseFloat(getTemp(temp)),
        weatherState: weatherState,
        humidity: humidity,
        wind: `${speed} m/s`,
        name: weather_data.name
    }

    return data;
}

export default transformWeather;
