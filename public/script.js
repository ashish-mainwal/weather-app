document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-field");
    const weatherInfo = document.getElementById("weather-info");
    const searchBtn = document.getElementById("search-btn");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const cityNameDisplay = document.getElementById("city-name");
    const errorMsg = document.getElementById("error-msg");

    searchBtn.addEventListener("click", async () => {
        const inputCityName = inputField.value.trim();

        // empty input check
        if (inputCityName === "") {
            errorMsg.textContent = "Please enter a city name!";
            weatherInfo.classList.add("hidden")
            errorMsg.classList.remove("hidden");
            return;
        }

        // hide error on new search
        errorMsg.textContent = "";
        errorMsg.classList.add("hidden");

        try {
            const response = await fetch(`/weather?city=${inputCityName}`);
            const data = await response.json();

            // city not found
            if (data.cod !== 200) {
                errorMsg.textContent = "City not found!";
                errorMsg.classList.remove("hidden");
                weatherInfo.classList.add("hidden");
                return;
            }

            // show weather
            temperature.textContent = data.main.temp + "°C";
            description.textContent = data.weather[0].description;
            cityNameDisplay.textContent = data.name;
            weatherInfo.classList.remove("hidden");

        } catch (error) {
            errorMsg.textContent = "Something went wrong!";
            errorMsg.classList.remove("hidden");
        }
    });
});