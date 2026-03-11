function procurarCidade(){

const cidade = document.getElementById("cityInput").value;

window.location.href = "weather.html?city=" + cidade;

}


function mudarFundo(estado){

    if (estado === "Clear") {
        document.body.style.background = "linear-gradient(to bottom, #4facfe, #00f2fe)";
    } else if (estado === "Clouds") {
        document.body.style.background = "linear-gradient(to bottom, #bdc3c7, #2c3e50)";
    } else if (estado === "Rain") {
        document.body.style.background = "linear-gradient(to bottom, #4b79a1, #283e51)";
    } else if (estado === "Drizzle") {
        document.body.style.background = "linear-gradient(to bottom, #89f7fe, #66a6ff)";
    } else if (estado === "Thunderstorm") {
        document.body.style.background = "linear-gradient(to bottom, #141e30, #243b55)";
    } else if (estado === "Snow") {
        document.body.style.background = "linear-gradient(to bottom, #e6f0ff, #ffffff)";
    } else if (estado === "Mist" || estado === "Fog" || estado === "Haze") {
        document.body.style.background = "linear-gradient(to bottom, #d7d2cc, #304352)";
    } else {
        document.body.style.background = "linear-gradient(to bottom, #74ebd5, #acb6e5)";
    }
}
const params = new URLSearchParams(window.location.search);
const city = params.get("city");
getWeather(city);

async function getWeather(city) {

const apiKey = "7ac7fdd190ade699e9c9cb9459468914";

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
const estado = data.weather[0].main;    

mudarFundo(estado);

}
function abrirFolha() {
    document.getElementById("folha").classList.toggle("ativa");
    }

