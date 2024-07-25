import axios from "axios";
const API_KEY = 'f86391c3f009f56fa70b18132a4accbe';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';


export const fetchWeather = (city) => async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_WEATHER_REQUEST' });
      const response =await axios.get(`${BASE_URL}/forecast?appid=${API_KEY}&q=${city}&units=metric&cnt=30`)
       dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data.list });
    } catch (error) {
      dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error });
    }
  };
  