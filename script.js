
document.getElementById('Search-Btn').addEventListener('click',function(){
    
    const cityInput=document.getElementById('city-input').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=f473e9dc8893d48e5455fc0e795afec5&units=metric`;
    console.log(cityInput);
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
       document.getElementById('city-name').innerText=json.name;
       document.getElementById('city-temp').innerText=json.main.temp;
       document.getElementById('description').innerText=json.weather[0].main;
       const iconCode = json.weather[0].icon;
       const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
       document.getElementById('weather-icon').src=iconUrl;

        console.log(json);
    })
    
})