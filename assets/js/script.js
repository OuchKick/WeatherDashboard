var buttonEl = document.querySelector('.btn');
var inputEl = document.querySelector('.form-input');
var cityNameEl = document.querySelector('.card-name');
var cityDescEl = document.querySelector('.card-desc');
var cityTempEl = document.querySelector('.card-temp');


buttonEl.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputEl.value+'&appid=06a0e2036d2bbf6771592a9af49eefe3')
.then(response => response.json())
.then(data => {
    var cityValue = data['name'];
    var cityTemp = data['main']['temp'];
    var cityDesc = data['weather'][0]['description'];

    cityNameEl.innerHTML = cityValue;
    cityDescEl.innerHTML = cityDesc;
    cityTempEl.innerHTML = cityTemp;

})

.catch(err => alert("Invalid city name!"))

})






