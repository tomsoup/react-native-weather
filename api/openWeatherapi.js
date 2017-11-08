import axios from 'axios';
import { OPEN_MAP_API } from 'react-native-dotenv';

const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${ OPEN_MAP_API }`;


export const getTemp = async (location) => {
    try {
      let requestEndPoint = `${OPEN_WEATHER_URL}&q=${location}`;
      let { data } = await axios.get(requestEndPoint);
      return data.main.temp;
   } catch (err) {
      console.log(err);
    }
  };
