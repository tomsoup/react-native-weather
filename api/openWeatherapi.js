import axios from 'axios';
import { OPEN_MAP_API } from 'react-native-dotenv';
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${ OPEN_MAP_API }`;


export const getTemp = async (zip) => {
  const encodedLocation = encodeURIComponent(zip);
  const requestEndPoint = `${OPEN_WEATHER_URL}&zip=${encodedLocation},us`;
  try {
    const { data } = await axios.get(requestEndPoint);
    console.log(data);
    return data;
  } catch (error) {
     console.log(error.message);
     throw new Error(error.message);
   }
};
