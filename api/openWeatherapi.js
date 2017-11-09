import axios from 'axios';
import { OPEN_MAP_API } from 'react-native-dotenv';
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${ OPEN_MAP_API }`;


export const getTemp = async (location) => {
  const encodedLocation = encodeURIComponent(location);
  let requestEndPoint = `${OPEN_WEATHER_URL}&q=${encodedLocation}`;
  try {
    let { data } = await axios.get(requestEndPoint);
    console.log(data);
    return data.main.temp;
  } catch (error) {
     console.log(error.message);
     throw new Error(error.message);
   }
};
