$(document).ready(function () {
            var APIKey = "f41db2588c976c36341b4a73e28d5118";
            var citiesArray = [];
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";

                $.ajax({
                    url: queryURL,
                    method: "GET",
                }).then(function (response) {
                    var cityInfo = response.name;
                    console.log(cityInfo);
                });
            }
            
            //when search for city button is clicked, info pops up and city is appended