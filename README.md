# react-native-weather
This react-native weather app is inspired by [FreeCodeCamp Show the Local Weather App Chanllenge](https://www.freecodecamp.org/challenges/show-the-local-weather "FreeCodeCamp Show the Local Weather App Challenge").

The completed project can be view using [Expo](https://expo.io/@tomsoup/weather-app "Link to Expo") and source code is available on   [Github](https://github.com/tomsoup/react-native-weather "Github")

Below is an image of the completed app.

![image](./completed.png)

The app is responsible for taking the user input (zip code) and make GET request to the OpenWeatherMap endpoint and display the temperature, and weather condition to the user.  The user can choose to display the temperature in Celcius or Fahrenheit upon pressing the metric unit icon.

I did not useRedux as I am only dealing with fairly small states and only one container to supply the props for our application.  

I have included the following node modules to aid the task

# Node Modules

we will be using the following node module to build our weather app.
1.   [axios@0.17.0](https://github.com/axios/axios "Axios") for making GET request on weather API.
2.  [react-native-elements@0.16.0](https://github.com/react-native-training/react-native-elements "React Native Element") For buttons and icons.



