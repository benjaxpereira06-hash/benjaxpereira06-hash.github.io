// ---------------------------
// Navegação e pesquisa de cidades
// ---------------------------

// Redireciona para a página inicial
function voltar() {
    window.location.href = "index.html?";
}

// Redireciona para a página do clima com a cidade pesquisada
function procurarCidade() {
    const cidade = document.getElementById("cityInput").value;
    window.location.href = "weather.html?city=" + cidade;
}

// ---------------------------
// Alteração do fundo conforme o  estado do tempo
// ---------------------------
function mudarFundo(estado) {
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

// ---------------------------
// Obtenção do nome da cidade da URL e chamada da API
// ---------------------------
const params = new URLSearchParams(window.location.search);
const city = params.get("city");
getWeather(city);

// Função principal que procura dados do clima via OpenWeatherMap API
async function getWeather(city) {
    const apiKey = "7ac7fdd190ade699e9c9cb9459468914";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`;

    const response = await fetch(url);
    const data = await response.json();

    // Atualiza elementos do HTML com os dados recebidos
    document.getElementById("city").innerText = data.name + ", " + data.sys.country;
    document.getElementById("temp").innerText = data.main.temp + " °C";
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " m/s";
    document.getElementById("feels").innerText = data.main.feels_like + " °C";

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Altera o fundo de acordo com o estado do tempo
    const estado = data.weather[0].main;
    mudarFundo(estado);
}

// ---------------------------
// Funções para interatividade do menu e pesquisa
// ---------------------------
function abrirFolha() {
    document.getElementById("folha").classList.toggle("ativa");
}

function mostrarPesquisa() {
    document.getElementById("overlay").classList.toggle("ativo");
}

// ---------------------------
// Geolocalização do utilizador
// ---------------------------
window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sucesso, erro);
    } else {
        console.log("Geolocalização não é suportada pelo teu navegador.");
    }
};

// Caso obtenha a localização com sucesso, procura o clima por coordenadas
function sucesso(posicao) {
    const lat = posicao.coords.latitude;
    const lon = posicao.coords.longitude;
    getWeatherByCoords(lat, lon);
}

// Caso não seja possível obter a localização
function erro() {
    console.log("Não foi possível obter a tua localização. Podes pesquisar manualmente.");
}

// ---------------------------
// Função para procurar o clima usando coordenadas 
// ---------------------------
function getWeatherByCoords(lat, lon) {
    const apiKey = "7ac7fdd190ade699e9c9cb9459468914"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city1").innerText = data.name + ", " + data.sys.country;
            document.getElementById("temp1").innerText = Math.round(data.main.temp) + " °C";
            document.getElementById("desc1").innerText = data.weather[0].description;        
        })
        .catch(err => console.error("Erro ao obter dados por localização:", err));
}

