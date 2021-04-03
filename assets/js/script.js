var buttonEl = document.querySelector('.btn');
var inputEl = document.querySelector('.form-input');
var cityNameEl = document.querySelector('.card-name');
var cityDescEl = document.querySelector('.card-desc');
var cityTempEl = document.querySelector('.card-temp');


buttonEl.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputEl.value+'&units=imperial&appid=06a0e2036d2bbf6771592a9af49eefe3')
.then(response => response.json())
.then(data => {
    var cityValue = data['city']['name'];
    var cityTemp = data['list'][0]['main']['temp'];
    var cityDesc = data['weather'];
    console.log(data);
    

    cityNameEl.innerHTML = cityValue;
    cityDescEl.innerHTML = cityDesc;
    cityTempEl.innerHTML = cityTemp + '°F';

})

.catch(err => console.log(err))



})






