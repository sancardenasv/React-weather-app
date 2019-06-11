import { url_base_weather, url_base_forecast, api_key } from "./../constants/api_url";

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`
}

const getUrlForecastByCity = city => {
    return `${url_base_forecast}?q=${city}&appid=${api_key}`
}

export {
    getUrlWeatherByCity,
    getUrlForecastByCity
}