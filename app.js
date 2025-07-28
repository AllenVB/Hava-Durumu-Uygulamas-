const cityInput = document.querySelector('#cityInput');
const weatherForm = document.querySelector('#weatherForm');
const weatherResult = document.querySelector('#weatherResult');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('#temperature');
const cityname = document.querySelector('#cityName');
const description = document.querySelector('#description');

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) {
        alert('Lütfen bir şehir adı girin.');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0ad2bd63ed07359e4d47ed692a0ba5c&lang=tr`);
        if (!response.ok) {
            throw new Error('Şehir bulunamadı.');
        }
        const data = await response.json();

        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
        temperature.textContent = `${(data.main.temp - 273.15).toFixed(1)} °C`;
        cityname.textContent = data.name;
        description.textContent = data.weather[0].description;

        weatherResult.style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
});