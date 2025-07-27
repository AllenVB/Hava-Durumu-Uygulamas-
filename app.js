const cityInput = document.querySelector('#cityInput');
const weatherForm = document.querySelector('#weatherForm');
const weatherResult = document.querySelector('#weatherResult');
const weaatherIcon = document.querySelector('.weather-icon');
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
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f0ad2bd63ed07359e4d47ed692a0ba5c&q=${encodeURIComponent(city)}&lang=tr`);
        if (!response.ok) {
            throw new Error('Şehir bulunamadı.');
        }
        const data = await response.json();

        weaatherIcon.innerHTML = `<img src="https:${data.current.condition.icon}" alt="icon">`;
        temperature.textContent = `${data.current.temp_c} °C`;
        cityname.textContent = data.location.name;
        description.textContent = data.current.condition.text;

        weatherResult.style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
});