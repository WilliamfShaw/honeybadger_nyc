$(function() {
    function getWeatherData(city) {
        const result = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            data: {
                q: city,
                APPID: apiKey,
                units: 'imperial'
            },
            dataType: 'json',
            method: 'GET'
        });

        return result;
    }

    function transformWeatherData(weatherData) {
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const lat = weatherData.coord.lat;
        const long = weatherData.coord.lon;

        // const { name, main: { temp: temperature }, weather: [ { description } ], coord: { lat, lon: long} } = weatherData;

        return {
            cityName,
            temperature,
            description,
            lat,
            long
        }
    }

    function renderWeatherData(updatedWeatherData) {
        //LOAD THE DATA
        const { cityName, temperature, description, lat, long } = updatedWeatherData;
        const template = `
            <h1>${cityName}</h1>
            <h2>${temperature}</h2>
            <p>${description}</p>
            <span>LATITUDE: ${lat} || LONGTITUDE: ${long}</span>
        `;

        $('#results').append(template);
    }

    getWeatherData('New York')
        .then(transformWeatherData)
        .then(renderWeatherData)

    getWeatherData('London')
        .then(transformWeatherData)
        .then(renderWeatherData)
    ;


    const result = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {
            q: city,
            APPID: apiKey,
            units: 'imperial'
        },
        dataType: 'json',
        method: 'GET'
    });

    return result;
})
