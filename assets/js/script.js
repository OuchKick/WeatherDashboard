var buttonEl = document.querySelector('.btn');
var inputEl = document.querySelector('.form-input');

var cityNameEl = document.querySelector('.card-name');
var cityDescEl = document.querySelector('.card-desc');
var cityTempEl = document.querySelector('.card-temp');
var cityTimeEl = document.querySelector('.card-time');


var cityNameTwo = document.querySelector('.card-nameT');
var cityDescTwo = document.querySelector('.card-descT');
var cityTempTwo = document.querySelector('.card-tempT');
var cityTimeTwo = document.querySelector('.card-timeT');

var cityNameThree = document.querySelector('.card-nameTh');
var cityDescThree = document.querySelector('.card-descTh');
var cityTempThree = document.querySelector('.card-tempTh');
var cityTimeThree = document.querySelector('.card-timeTh');

var cityNameFour = document.querySelector('.card-nameF');
var cityDescFour = document.querySelector('.card-descF');
var cityTempFour = document.querySelector('.card-tempF');
var cityTimeFour = document.querySelector('.card-timeF');

var cityNameFive = document.querySelector('.card-nameFi');
var cityDescFive = document.querySelector('.card-descFi');
var cityTempFive = document.querySelector('.card-tempFi');
var cityTimeFive = document.querySelector('.card-timeFi');



buttonEl.addEventListener('click', function(event){
    event.preventDefault();
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputEl.value+'&units=imperial&appid=06a0e2036d2bbf6771592a9af49eefe3')
.then(response => response.json())
.then(data => {
    var cityValue = data['city']['name'];
    var cityDesc = data['list'][0]['weather'][0]['description'];
    var cityTemp = data['list'][0]['main']['temp'];
    var cityTime = data['list'][0]['dt_txt'];
    // var tempVariable = data['list'][0]['weather'][0]['icon'];

    var cityValueTw = data['city']['name'];
    var cityDescTw = data['list'][1]['weather'][0]['description'];
    var cityTempTw = data['list'][1]['main']['temp'];
    var cityTimeTw = data['list'][1]['dt_txt'];

    var cityValueThr = data['city']['name'];
    var cityDescThr = data['list'][2]['weather'][0]['description'];
    var cityTempThr = data['list'][2]['main']['temp'];
    var cityTimeThr = data['list'][2]['dt_txt'];

    var cityValueFou = data['city']['name'];
    var cityDescFou = data['list'][3]['weather'][0]['description'];
    var cityTempFou = data['list'][3]['main']['temp'];
    var cityTimeFou = data['list'][3]['dt_txt'];

    var cityValueFiv = data['city']['name'];
    var cityDescFiv = data['list'][4]['weather'][0]['description'];
    var cityTempFiv = data['list'][4]['main']['temp'];
    var cityTimeFiv = data['list'][4]['dt_txt'];

    console.log(data);
    

    cityNameEl.innerHTML = cityValue;
    cityDescEl.innerHTML = 'Cloud Activity: ' + cityDesc;
    cityTempEl.innerHTML = 'Temp: ' +  cityTemp + '°F';
    cityTimeEl.innerHTML = 'Date and Time: ' + cityTime;

    cityNameTwo.innerHTML = cityValueTw;
    cityDescTwo.innerHTML = 'Cloud Activity: ' + cityDescTw;
    cityTempTwo.innerHTML = 'Temp: ' +  cityTempTw + '°F';
    cityTimeTwo.innerHTML = 'Date and Time: ' + cityTimeTw;

    cityNameThree.innerHTML = cityValueThr;
    cityDescThree.innerHTML = 'Cloud Activity: ' + cityDescThr;
    cityTempThree.innerHTML = 'Temp: ' +  cityTempThr + '°F';
    cityTimeThree.innerHTML = 'Date and Time: ' + cityTimeThr;

    cityNameFour.innerHTML = cityValueFou;
    cityDescFour.innerHTML = 'Cloud Activity: ' + cityDescFou;
    cityTempFour.innerHTML = 'Temp: ' +  cityTempFou + '°F';
    cityTimeFour.innerHTML = 'Date and Time: ' + cityTimeFou;

    cityNameFive.innerHTML = cityValueFiv;
    cityDescFive.innerHTML = 'Cloud Activity: ' + cityDescFiv;
    cityTempFive.innerHTML = 'Temp: ' +  cityTempFiv + '°F';
    cityTimeFive.innerHTML = 'Date and Time: ' + cityTimeFiv;

   
})


.catch(err => console.log(err))


})














