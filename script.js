function mudarFundo(estado){

    if(estado === "Clear"){
        document.body.style.backgroundColor = "#87CEEB"; // céu limpo (azul)

    } else if(estado === "Clouds"){
        document.body.style.backgroundColor = "#B0B0B0"; // nublado

    } else if(estado === "Rain"){
        document.body.style.backgroundColor = "#5F9EA0"; // chuva

    } else if(estado === "Snow"){
        document.body.style.backgroundColor = "#E6F2FF"; // neve

    } else if(estado === "Thunderstorm"){
        document.body.style.backgroundColor = "#4B4B4B"; // trovoada

    } else {
        document.body.style.backgroundColor = "#FFFFFF"; // default
    }

}



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
