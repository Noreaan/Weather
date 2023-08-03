import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = (country) => {
    return axios
        .get(`${baseUrl}?q=${country}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(weatherResponse => weatherResponse.data);
}

export default { getWeather }