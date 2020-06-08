$(document).ready(function () {
    var APIKey = "f41db2588c976c36341b4a73e28d5118";
    var cityNames = "London, England"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNames + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Create CODE HERE to Log the queryURL
        console.log(queryURL)
        // Create CODE HERE to log the resulting object
        console.log(response)
        // Create CODE HERE to calculate the temperature (converted from Kelvin)

        // Create CODE HERE to transfer content to HTML
        // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
        // Create CODE HERE to dump the temperature content into HTML

    });
});