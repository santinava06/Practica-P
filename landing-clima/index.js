const apiKey = "f0495d7f0f874a634d45973906b3f3ea"; 
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    obtenerClima(city);
  }
});

async function obtenerClima(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );

    if (!res.ok) throw new Error("Ciudad no encontrada");

    const data = await res.json();
    mostrarClima(data);
  } catch (error) {
    alert("Error: " + error.message);
  }
}

function mostrarClima(data) {
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)} °C`;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("wind").textContent = (data.wind.speed * 3.6).toFixed(1); 
}
