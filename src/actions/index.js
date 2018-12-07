
const API = 'https://api.openweathermap.org/data/2.5/weather?';
const DEFAULT_Q = 'lat=43.6' + '&lon=-79.3';
const UNITS = '&units=metric';
const clientID = '&APPID=ffd197e8fff80bccc4753ff5d9888e0f';
const MODE='&mode=xml';



export const fetchTemp = (lat, lon) => async dispatch => {
	const currentTemp = await fetchWeather(lat, lon).then(result => result.main.temp);

	dispatch ({ type:'CURRENT_TEMP', payload: currentTemp})


};


async function fetchWeather(lat, lon) {

	const response = await fetch(API + 'lat=' + lat + '&lon=' + lon + UNITS + clientID);
	
	const result = await response.json();

	return result;

}




/* UNABLE DETERMINE HOW XML RESPONSE CONVERTS TO ACCESSIBLE JSON


async function fetchWeather() {

await fetch(API + DEFAULT_Q + UNITS + clientID + MODE)
		.then(response => response.text())
		.then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
		.then(data => document.getElementsByTagName("temperature")[0].childNodes[0].nodeValue));

}
*/


















