var buttonEl = document.querySelector('.btn');
var inputEl = document.querySelector('.form-input');
var lsCities = document.getElementById('lsCities');

var cityNameEl = document.querySelector('.card-name');
var cityDescEl = document.querySelector('.card-desc');
var cityTempEl = document.querySelector('.card-temp');
var cityWindEl = document.querySelector('.card-wind');
var cityHumidityEl = document.querySelector('.card-humidity');
var cityTimeEl = document.querySelector('.card-time');

var cityNameTwo = document.querySelector('.card-nameT');
var cityDescTwo = document.querySelector('.card-descT');
var cityTempTwo = document.querySelector('.card-tempT');
var cityWindTwo = document.querySelector('.card-windT');
var cityHumidityTwo = document.querySelector('.card-humidityT');
var cityTimeTwo = document.querySelector('.card-timeT');

var cityNameThree = document.querySelector('.card-nameTh');
var cityDescThree = document.querySelector('.card-descTh');
var cityTempThree = document.querySelector('.card-tempTh');
var cityWindThree = document.querySelector('.card-windTh');
var cityHumidityThree = document.querySelector('.card-humidityTh');
var cityTimeThree = document.querySelector('.card-timeTh');

var cityNameFour = document.querySelector('.card-nameF');
var cityDescFour = document.querySelector('.card-descF');
var cityTempFour = document.querySelector('.card-tempF');
var cityWindFour = document.querySelector('.card-windF');
var cityHumidityFour = document.querySelector('.card-humidityF');
var cityTimeFour = document.querySelector('.card-timeF');

var cityNameFive = document.querySelector('.card-nameFi');
var cityDescFive = document.querySelector('.card-descFi');
var cityTempFive = document.querySelector('.card-tempFi');
var cityWindFive = document.querySelector('.card-windFi');
var cityHumidityFive = document.querySelector('.card-humidityFi');
var cityTimeFive = document.querySelector('.card-timeFi');


var cityNameTop = document.querySelector('.card-nameTop');
var cityCurrentCloud = document.querySelector('.currentCloud');
var cityCurrentTemp = document.querySelector('.currentTemp');
var cityCurrentWind = document.querySelector('.currentWind');
var cityCurrentHumidity = document.querySelector('.currentHumidity');


localStorage.getItem('searchHistory');


buttonEl.addEventListener('click', function(event){
    var city = inputEl.value;
    console.log(city);
    localStorage.setItem('searchHistory', city);
    event.preventDefault();
    lsCities.innerHTML = 'Click on the search box to view previously searched locations.';
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputEl.value+'&units=imperial&appid=06a0e2036d2bbf6771592a9af49eefe3')
.then(response => response.json())
.then(data => {


    
    var cityValue = data['city']['name'];
    var cityNameBig = data['city']['name'];
    var cityDesc = data['list'][0]['weather'][0]['description'];
    var cityTemp = data['list'][0]['main']['temp'];
    var cityWind = data['list'][0]['wind']['speed'];
    var cityHumidity = data['list'][0]['main']['humidity'];
    var cityTime = data['list'][0]['dt_txt'];

    // var tempVariable = data['list'][0]['weather'][0]['icon'];

    var cityValueTw = data['city']['name'];
    var cityDescTw = data['list'][8]['weather'][0]['description'];
    var cityTempTw = data['list'][8]['main']['temp'];
    var cityWindTw = data['list'][8]['wind']['speed'];
    var cityHumidityTw = data['list'][8]['main']['humidity'];
    var cityTimeTw = data['list'][8]['dt_txt'];

    var cityValueThr = data['city']['name'];
    var cityDescThr = data['list'][16]['weather'][0]['description'];
    var cityTempThr = data['list'][16]['main']['temp'];
    var cityWindThr = data['list'][16]['wind']['speed'];
    var cityHumidityThr = data['list'][16]['main']['humidity'];
    var cityTimeThr = data['list'][16]['dt_txt'];

    var cityValueFou = data['city']['name'];
    var cityDescFou = data['list'][24]['weather'][0]['description'];
    var cityTempFou = data['list'][24]['main']['temp'];
    var cityWindFou = data['list'][24]['wind']['speed'];
    var cityHumidityFou = data['list'][24]['main']['humidity'];
    var cityTimeFou = data['list'][24]['dt_txt'];

    var cityValueFiv = data['city']['name'];
    var cityDescFiv = data['list'][32]['weather'][0]['description'];
    var cityTempFiv = data['list'][32]['main']['temp'];
    var cityWindFiv = data['list'][32]['wind']['speed'];
    var cityHumidityFiv = data['list'][32]['main']['humidity'];
    var cityTimeFiv = data['list'][32]['dt_txt'];

    console.log(data);
    
    cityNameTop.innerHTML = cityNameBig;
    cityNameEl.innerHTML = cityValue;
    cityDescEl.innerHTML = 'Cloud Activity: ' + cityDesc;
    cityTempEl.innerHTML = 'Temp: ' +  cityTemp + '°F';
    cityWindEl.innerHTML = 'Wind Speed: ' + cityWind + ' MPH';
    cityHumidityEl.innerHTML = 'Humidity: ' + cityHumidity + '%';
    cityTimeEl.innerHTML = 'Date and Time: ' + cityTime;

    cityNameTwo.innerHTML = cityValueTw;
    cityDescTwo.innerHTML = 'Cloud Activity: ' + cityDescTw;
    cityTempTwo.innerHTML = 'Temp: ' +  cityTempTw + '°F';
    cityWindTwo.innerHTML = 'Wind Speed: ' + cityWindTw + ' MPH';
    cityHumidityTwo.innerHTML = 'Humidity: ' + cityHumidityTw + '%';
    cityTimeTwo.innerHTML = 'Date and Time: ' + cityTimeTw;

    cityNameThree.innerHTML = cityValueThr;
    cityDescThree.innerHTML = 'Cloud Activity: ' + cityDescThr;
    cityTempThree.innerHTML = 'Temp: ' +  cityTempThr + '°F';
    cityWindThree.innerHTML = 'Wind Speed: ' + cityWindThr + ' MPH';
    cityHumidityThree.innerHTML = 'Humidity: ' + cityHumidityThr + '%';
    cityTimeThree.innerHTML = 'Date and Time: ' + cityTimeThr;

    cityNameFour.innerHTML = cityValueFou;
    cityDescFour.innerHTML = 'Cloud Activity: ' + cityDescFou;
    cityTempFour.innerHTML = 'Temp: ' +  cityTempFou + '°F';
    cityWindFour.innerHTML = 'Wind Speed: ' + cityWindFou + ' MPH';
    cityHumidityFour.innerHTML = 'Humidity: ' + cityHumidityFou + '%';
    cityTimeFour.innerHTML = 'Date and Time: ' + cityTimeFou;

    cityNameFive.innerHTML = cityValueFiv;
    cityDescFive.innerHTML = 'Cloud Activity: ' + cityDescFiv;
    cityTempFive.innerHTML = 'Temp: ' +  cityTempFiv + '°F';
    cityWindFive.innerHTML = 'Wind Speed: ' + cityWindFiv + ' MPH';
    cityHumidityFive.innerHTML = 'Humidity: ' + cityHumidityFiv + '%';
    cityTimeFive.innerHTML = 'Date and Time: ' + cityTimeFiv;

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputEl.value+'&units=imperial&exclude=minutely,hourly,daily,alerts&appid=06a0e2036d2bbf6771592a9af49eefe3')
.then(response => response.json())
.then(data => {
   var currentClouds = data['weather'][0]['description'];
   var currentTemp = data['main']['temp'];
   var currentWind = data['wind']['speed'];
   var currentHumidity = data['main']['humidity'];
    



    cityCurrentCloud.innerHTML = 'Current Cloud Activity: ' + currentClouds;
    cityCurrentTemp.innerHTML = 'Current Temp: ' + currentTemp + '°F';
    cityCurrentWind.innerHTML = 'Current Wind Speed: ' + currentWind + ' MPH';
    cityCurrentHumidity.innerHTML = 'Current Humidity: ' + currentHumidity + '%';


console.log(data);
})


    

   
})



.catch(err => console.log(err))


})














