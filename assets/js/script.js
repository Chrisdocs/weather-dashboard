//Global variables
var citiesArray = [];

function getInput(event) {
    if (event) {
        window.location.reload();
    } else {
    var city = document.getElementById("citySearch").value;
    citiesArray[0] = localStorage.setItem("City" + localStorage.length, city);
    var apiLinkCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&units=imperial&appid=53cd6e2725805df5b134360f4870a02f';
    var apiLinkForcast = 'https://api.openweathermap.org/data/2.5/forecast?q=' +city+ '&units=imperial&appid=53cd6e2725805df5b134360f4870a02f';
    var apiReverseGeo = "https://geocode.search.hereapi.com/v1/geocode?q=" +city+ "&apiKey=Wmn5yDoRnJgyCeKcxAXGX8sd5Vq4qtwk6TIarbw6vE8"
    }
    
    
    
        // get weather data for the current day
        fetch(apiLinkCurrent).then(function(response){
            response.json().then(function(data) {
                console.log(data);
                //current day weather variables
                var currentDayWeatherDiv = document.getElementById("currentDayWeather");
                var currentWeatherP = document.createElement("p");
                var currentTemp = "Current Tempurature: " + JSON.stringify(data.main.temp);
                var tempHigh = "High Tempurature: " + JSON.stringify(data.main.temp_max);
                var tempLow = "Low Tempurature: " + JSON.stringify(data.main.temp_min);
                var feelsLike = "Feels like: " + JSON.stringify(data.main.feels_like);
                var humidity = "humidity: " + JSON.stringify(data.main.humidity) + "%";
                var clouds = JSON.stringify(data.clouds.all) + "% coverage";
                var weatherCurrent = "Current weather: " + data.weather[0].description;
                var weatherCurrentIcon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    
                //input data into HTML
                var currentHighLi = document.createElement("li");
                var currentLowLi = document.createElement("li");
                var currentWeatherLi = document.createElement("li");
                var currentHumidityLi = document.createElement("li");
                var currentCloudCoverageLi = document.createElement("li");
                var currentFeelsLikeLi = document.createElement("li");
                var currentTempLi = document.createElement("li");
                //append current weather icon
                var currentImgDiv = document.getElementById("currentIcon");
                currentImgDiv.innerHTML = "<img src=" + weatherCurrentIcon + ">"
                //append current weather data
                var getCurrentUl = document.getElementById("currentUl");
                getCurrentUl.appendChild(currentTempLi);
                currentTempLi.textContent = currentTemp;
                getCurrentUl.appendChild(currentHighLi);
                currentHighLi.textContent = tempHigh;
                getCurrentUl.appendChild(currentLowLi);
                currentLowLi.textContent = tempLow;
                getCurrentUl.appendChild(currentFeelsLikeLi);
                currentFeelsLikeLi.textContent = feelsLike;
                getCurrentUl.appendChild(currentHumidityLi);
                currentHumidityLi.textContent = humidity;
                getCurrentUl.appendChild(currentWeatherLi);
                currentWeatherLi.textContent = weatherCurrent;
                getCurrentUl.appendChild(currentCloudCoverageLi);
                currentCloudCoverageLi.textContent = clouds;

                //append saved searched to page
            function savedSearches() {
                var savedUl = document.getElementById("savedSearchUl");
                var savedLi = document.createElement("li");

                for (var i = 0; i < localStorage.length; i++) {
                    savedUl.appendChild(savedLi);
                    savedLi.innerHTML = "<button type=input>"  + localStorage.getItem('City'+[i]) + "</button>";
                    savedLi.addEventListener("click", function(event){
                        console.log("clicked");
                    })
                }
            function appendCities() {
                for (var i = 0; i < localStorage.length; i++) {
                    var getCities = localStorage.getItem("City");
                    console.log(getCities[i]);
                        }
                    }
                }
                savedSearches();
                appendCities();
            });
        });
    
        //Get weather for the future forcast
        fetch(apiLinkForcast).then(function(response){
            response.json().then(function(data) {
                console.log(data);
                //get day 1 forcast data
                var dayOneTempHigh = "High: " + data.list[6].main.temp_max;
                var dayOneTempLow = "Low: " + data.list[3].main.temp_min;
                var dayOneWeather = "Weather: " + data.list[4].weather[0].description;
                var dayOneWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png";
                //get day 2 forcast data
                var dayTwoTempHigh = "High: " + data.list[14].main.temp_max;
                var dayTwoTempLow = "Low: " + data.list[11].main.temp_min;
                var dayTwoWeather = "Weather: " + data.list[10].weather[0].description;
                var dayTwoWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[10].weather[0].icon + "@2x.png";
                //get day 3 forcast data
                var dayThreeTempHigh = "High: " + data.list[22].main.temp_max;
                var dayThreeTempLow = "Low: " + data.list[19].main.temp_min;
                var dayThreeWeather = "Weather: " + data.list[20].weather[0].description;
                var dayThreeWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[20].weather[0].icon + "@2x.png";
                //get day 4 forcast data
                var dayFourTempHigh = "High: " + data.list[30].main.temp_max;
                var dayFourTempLow = "Low: " + data.list[27].main.temp_min;
                var dayFourWeather = "Weather: " + data.list[28].weather[0].description;
                var dayFourWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[28].weather[0].icon + "@2x.png";
                //get day 5 forcast data
                var dayFiveTempHigh = "High: " + data.list[38].main.temp_max;
                var dayFiveTempLow = "Low: " + data.list[35].main.temp_min;
                var dayFiveWeather = "Weather: " + data.list[35].weather[0].description;
                var dayFiveWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + "@2x.png";
                //get day 6 forcast data
                var daySixTempHigh = "High: " + data.list[39].main.temp_max;
                var daySixTempLow = "Low: " + data.list[39].main.temp_min;
                var daySixWeather = "Weather: " + data.list[39].weather[0].description;
                var daySixWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png";
    
                //get the elements and input append them accordingly
    
                //day one forcast
                var dayOneLi1 = document.createElement("li");
                var dayOneLi2 = document.createElement("li");
                var dayOneLi3 = document.createElement("li");
                var dayOneIcon = document.createElement("div");
                var dayOneUl = document.getElementById("d1Ul");
                dayOneUl.appendChild(dayOneIcon);
                dayOneUl.className = "forcastDiv"
                dayOneIcon.innerHTML = "<img class='icon' src=" + dayOneWeatherIcon + ">";
                dayOneUl.appendChild(dayOneLi1);
                dayOneLi1.textContent = dayOneTempHigh;
                dayOneLi1.classList = "fontSize"
                dayOneUl.appendChild(dayOneLi2);
                dayOneLi2.textContent = dayOneTempLow;
                dayOneLi2.classList = "fontSize"
                dayOneUl.appendChild(dayOneLi3);
                dayOneLi3.textContent = dayOneWeather;
                dayOneLi3.classList = "fontSize"
                //day 2 forcast
                var dayTwoLi1 = document.createElement("li");
                var dayTwoLi2 = document.createElement("li");
                var dayTwoLi3 = document.createElement("li");
                var dayTwoIcon = document.createElement("div");
                var dayTwoUl = document.getElementById("d2Ul");
                dayTwoUl.appendChild(dayTwoIcon);
                dayTwoUl.className = "forcastDiv"
                dayTwoIcon.innerHTML = "<img class='icon' src=" + dayTwoWeatherIcon + ">";
                dayTwoUl.appendChild(dayTwoLi1);
                dayTwoLi1.textContent = dayTwoTempHigh;
                dayTwoLi1.classList = "fontSize"
                dayTwoUl.appendChild(dayTwoLi2);
                dayTwoLi2.textContent = dayTwoTempLow;
                dayTwoLi2.classList = "fontSize"
                dayTwoUl.appendChild(dayTwoLi3);
                dayTwoLi3.textContent = dayTwoWeather;
                dayTwoLi3.classList = "fontSize"
                //day 3 forcast
                var dayThreeLi1 = document.createElement("li");
                var dayThreeLi2 = document.createElement("li");
                var dayThreeLi3 = document.createElement("li");
                var dayThreeIcon = document.createElement("div");
                var dayThreeUl = document.getElementById("d3Ul");
                dayThreeUl.appendChild(dayThreeIcon);
                dayThreeUl.className = "forcastDiv"
                dayThreeIcon.innerHTML = "<img class='icon' src=" + dayThreeWeatherIcon + ">";
                dayThreeUl.appendChild(dayThreeLi1);
                dayThreeLi1.textContent = dayThreeTempHigh;
                dayThreeLi1.classList = "fontSize"
                dayThreeUl.appendChild(dayThreeLi2);
                dayThreeLi2.textContent = dayThreeTempLow;
                dayThreeLi2.classList = "fontSize"
                dayThreeUl.appendChild(dayThreeLi3);
                dayThreeLi3.textContent = dayThreeWeather;
                dayThreeLi3.classList = "fontSize"
                //day 4 forcast
                var dayFourLi1 = document.createElement("li");
                var dayFourLi2 = document.createElement("li");
                var dayFourLi3 = document.createElement("li");
                var dayFourIcon = document.createElement("div");
                var dayFourUl = document.getElementById("d4Ul");
                dayFourUl.appendChild(dayFourIcon);
                dayFourUl.className = "forcastDiv"
                dayFourIcon.innerHTML = "<img class='icon' src=" + dayFourWeatherIcon + ">";
                dayFourUl.appendChild(dayFourLi1);
                dayFourLi1.textContent = dayFourTempHigh;
                dayFourLi1.classList = "fontSize"
                dayFourUl.appendChild(dayFourLi2);
                dayFourLi2.textContent = dayFourTempLow;
                dayFourLi2.classList = "fontSize"
                dayFourUl.appendChild(dayFourLi3);
                dayFourLi3.textContent = dayFourWeather;
                dayFourLi3.classList = "fontSize"
                //day 5 forcast
                var dayFiveLi1 = document.createElement("li");
                var dayFiveLi2 = document.createElement("li");
                var dayFiveLi3 = document.createElement("li");
                var dayFiveIcon = document.createElement("div");
                var dayFiveUl = document.getElementById("d5Ul");
                dayFiveUl.appendChild(dayFiveIcon);
                dayFiveUl.className = "forcastDiv"
                dayFiveIcon.innerHTML = "<img class='icon' src=" + dayFiveWeatherIcon + ">";
                dayFiveUl.appendChild(dayFiveLi1);
                dayFiveLi1.textContent = dayFiveTempHigh;
                dayFiveLi1.classList = "fontSize"
                dayFiveUl.appendChild(dayFiveLi2);
                dayFiveLi2.textContent = dayFiveTempLow;
                dayFiveLi2.classList = "fontSize"
                dayFiveUl.appendChild(dayFiveLi3);
                dayFiveLi3.textContent = dayFiveWeather;
                dayFiveLi3.classList = "fontSize"
                //day 6 forcast
                var daySixLi1 = document.createElement("li");
                var daySixLi2 = document.createElement("li");
                var daySixLi3 = document.createElement("li");
                var daySixIcon = document.createElement("div");
                var daySixUl = document.getElementById("d6Ul");
                daySixUl.appendChild(daySixIcon);
                daySixUl.className = "forcastDiv"
                daySixIcon.innerHTML = "<img class='icon' src=" + daySixWeatherIcon + ">";
                daySixUl.appendChild(daySixLi1);
                daySixLi1.textContent = daySixTempHigh;
                daySixLi1.classList = "fontSize"
                daySixUl.appendChild(daySixLi2);
                daySixLi2.textContent = daySixTempLow;
                daySixLi2.classList = "fontSize"
                daySixUl.appendChild(daySixLi3);
                daySixLi3.textContent = daySixWeather;
                daySixLi3.classList = "fontSize"
            });
        });
    };
