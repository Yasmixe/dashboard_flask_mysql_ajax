const apiKey = "bef6a5c25399e49c430d62f89f5ea137";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search2 input");
const searchBtn = document.querySelector(".search2 button");
const weatherIcon = document.querySelector(".weather_icon");
async function checkweather(city){
const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
var data = await response.json();
console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";

if(data.weather[0].main == "Clouds")
{
  weatherIcon.src = "./static/weather-app-img/images/clouds.png";
}
else if(data.weather[0].main == "Clear")
{
  weatherIcon.src = "./static/weather-app-img/images/clear.png";

}
else if(data.weather[0].main == "Rain")
{
  weatherIcon.src = "./static/weather-app-img/images/rain.png";

}
else if(data.weather[0].main == "Drizzle")
{
  weatherIcon.src = "./static/weather-app-img/images/drizzle.png";

}
else if(data.weather[0].main == "Mist")
{
  weatherIcon.src = "./static/weather-app-img/images/mist.png";

}
else if(data.weather[0].main == "Snow")
{
  weatherIcon.src = "./static/weather-app-img/images/snow.png";

}
else if(data.weather[0].main == "Wind")
{
  weatherIcon.src = "./static/weather-app-img/images/wind.png";

}
else if(data.weather[0].main == "Humidity")
{
  weatherIcon.src = "./static/weather-app-img/images/humidity.png";

}

}

searchBtn.addEventListener("click", ()=>{
    if (searchBox.value.trim() === '') {
        alert('Please enter a city name!');
        return;
      }
    checkweather(searchBox.value);

})

const timeOutput = document.querySelector(".time");
const secOutput = document.querySelector(".sec");
const ampmOutput = document.querySelector(".ampm");
const monthOutput = document.querySelector(".month");
const dayofweekoutput = document.querySelector(".dayofweek");
const dayoutput = document.querySelector(".day");

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const MonthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function formatTime(val){
    if(val <10){
        return "0";
    }
    else{
        return "";
    }
}

function clock(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    dayofweekoutput.innerHTML = weekday[d.getDay()];
    monthOutput.innerHTML = MonthName[d.getMonth()];
    dayoutput.innerHTML = d.getDate();

    const time = formatTime(h) + h + ":" + formatTime(m) +m;
    const sec = formatTime(s) + s;

    const ampm = h>=12 ? 'PM' : 'AM';
    timeOutput.innerHTML = time;
    secOutput.innerHTML = sec;
    ampmOutput.innerHTML = ampm;
    setInterval(clock,1000);
}

clock();


let clientId = "HWqCuWHR-VUGk_nzG3bQqfFel10IhwYvu0wvvQ9hXhc";
let endpoint = `https://api.unsplash.com/photos/?client_id=${clientId}`;
let imageElemet = document.querySelector("#unsplashImage");
let imagelink = document.querySelector("#imageLink");

fetch(endpoint)
.then(function(response){
  return response.json();
})
.then(function(jsonData){
  imageElemet.src = jsonData.urls.regular;
})
