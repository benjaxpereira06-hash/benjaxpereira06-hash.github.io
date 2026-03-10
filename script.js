async function getWeather(city) {

const apiKey = "2160dac5edb82dac494416f80ac330a7";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`;

const response = await fetch(url);
const data = await response.json();

document.getElementById("city").innerText =
data.name + ", " + data.sys.country;

document.getElementById("temp").innerText =
data.main.temp + " °C";

document.getElementById("desc").innerText =
data.weather[0].description;

document.getElementById("humidity").innerText =
data.main.humidity + "%";

document.getElementById("wind").innerText =
data.wind.speed + " m/s";

document.getElementById("feels").innerText =
data.main.feels_like + " °C";

const icon = data.weather[0].icon;

document.getElementById("icon").src =
`https://openweathermap.org/img/wn/${icon}@2x.png`;

}
function abrirFolha() {
    document.getElementById("folha").classList.toggle("ativa");
    }
    document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("cancelar").style.display = "inline-block";
    });  
    document.getElementById("cancelar").addEventListener("click", function() {
    document.getElementById("cancelar").style.display = "none";
    });      
function fecharFolha() {
      document.getElementById("folha").classList.remove("ativa");
       } 
