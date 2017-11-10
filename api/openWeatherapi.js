import axios from 'axios';

const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=15a6d59e073249c647e8bdaa88b729c4`;


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
