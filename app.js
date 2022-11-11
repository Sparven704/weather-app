const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Larnaca&appid=01f26302a2ef88cb6c344239c69c403c&units=metric";

const url2 =
  "https://api.weatherbit.io/v2.0/forecast/daily?city=Larnaca&key=924bb30831e44e7bbe1687b1159fce1f&days=5";

loadData();
loadDataForecast();
const h1 = document.querySelector("h1");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather = document.querySelector(".weather-icon");

function loadData() {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      const tempLarnaca = data.main.temp;
      const feelsLikeTemp = data.main.feels_like;
      const humidityProcent = data.main.humidity;
      const windSpeed = data.wind.speed;

      h1.innerHTML = parseInt(tempLarnaca) + "ºC";
      feelsLike.innerHTML = parseInt(feelsLikeTemp) + "ºC";
      humidity.innerHTML = parseInt(humidityProcent) + "%";
      wind.innerHTML = parseInt(windSpeed) + " m/sec";
    });
}

const date = new Date();
let weekday = date.getDay();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

const setDate = document.querySelector(".date");
const setWeekday = document.querySelector(".day");
let nameofDay = "";
let nameofDayShort = "";

if (weekday === 1) {
  nameofDay = "Monday";
  nameofDayShort = "Mon";
} else if (weekday === 2) {
  nameofDay = "Tuesday";
  nameofDayShort = "Tue";
} else if (weekday === 3) {
  nameofDay = "Wednesday";
  nameofDayShort = "Wed";
} else if (weekday === 4) {
  nameofDay = "Thursday";
  nameofDayShort = "Thur";
} else if (weekday === 5) {
  nameofDay = "Friday";
  nameofDayShort = "Fri";
} else if (weekday === 6) {
  nameofDay = "Saturday";
  nameofDayShort = "Sat";
} else if (weekday === 7) {
  nameofDay = "Sunday";
  nameofDayShort = "Sun";
}

setWeekday.innerHTML = nameofDay;
setDate.innerHTML = currentDate;

const forecastOneSpan = document.querySelector(".forecast-one");
const forecastTwoSpan = document.querySelector(".forecast-two");
const forecastThreeSpan = document.querySelector(".forecast-three");
const forecastFourSpan = document.querySelector(".forecast-four");

let forecastOne = weekday + 1;
let forecastTwo = weekday + 2;
let forecastThree = weekday + 3;
let forecastFour = weekday + 4;

let forecastOneDay = "";
let forecastTwoDay = "";
let forecastThreeDay = "";
let forecastFourDay = "";

if (forecastOne > 7) {
  forecastOne = 1;
}

if (forecastTwo === 8) {
  forecastTwo = 1;
} else if (forecastTwo === 9) {
  forecastTwo = 2;
}

if (forecastThree === 8) {
  forecastThree = 1;
} else if (forecastThree === 9) {
  forecastThree = 2;
} else if (forecastThree === 10) {
  forecastThree = 3;
}

if (forecastFour === 8) {
  forecastFour = 1;
} else if (forecastFour === 9) {
  forecastFour = 2;
} else if (forecastFour === 10) {
  forecastFour = 3;
} else if (forecastFour === 11) {
  forecastFour = 4;
}

if (forecastOne === 1) {
  forecastOneDay = "Mon";
} else if (forecastOne === 2) {
  forecastOneDay = "Tue";
} else if (forecastOne === 3) {
  forecastOneDay = "Wed";
} else if (forecastOne === 4) {
  forecastOneDay = "Thur";
} else if (forecastOne === 5) {
  forecastOneDay = "Fri";
} else if (forecastOne === 6) {
  forecastOneDay = "Sat";
} else if (forecastOne === 7) {
  forecastOneDay = "Sun";
}

if (forecastTwo === 1) {
  forecastTwoDay = "Mon";
} else if (forecastTwo === 2) {
  forecastTwoDay = "Tue";
} else if (forecastTwo === 3) {
  forecastTwoDay = "Wed";
} else if (forecastTwo === 4) {
  forecastTwoDay = "Thur";
} else if (forecastTwo === 5) {
  forecastTwoDay = "Fri";
} else if (forecastTwo === 6) {
  forecastTwoDay = "Sat";
} else if (forecastTwo === 7) {
  forecastTwoDay = "Sun";
}

if (forecastThree === 1) {
  forecastThreeDay = "Mon";
} else if (forecastThree === 2) {
  forecastThreeDay = "Tue";
} else if (forecastThree === 3) {
  forecastThreeDay = "Wed";
} else if (forecastThree === 4) {
  forecastThreeDay = "Thur";
} else if (forecastThree === 5) {
  forecastThreeDay = "Fri";
} else if (forecastThree === 6) {
  forecastThreeDay = "Sat";
} else if (forecastThree === 7) {
  forecastThreeDay = "Sun";
}

if (forecastFour === 1) {
  forecastFourDay = "Mon";
} else if (forecastFour === 2) {
  forecastFourDay = "Tue";
} else if (forecastFour === 3) {
  forecastFourDay = "Wed";
} else if (forecastFour === 4) {
  forecastFourDay = "Thur";
} else if (forecastFour === 5) {
  forecastFourDay = "Fri";
} else if (forecastFour === 6) {
  forecastFourDay = "Sat";
} else if (forecastFour === 7) {
  forecastFourDay = "Sun";
}

forecastOneSpan.innerHTML = forecastOneDay;
forecastTwoSpan.innerHTML = forecastTwoDay;
forecastThreeSpan.innerHTML = forecastThreeDay;
forecastFourSpan.innerHTML = forecastFourDay;

const forecastTempOne = document.querySelector(".forecast-temp-one");
const forecastTempTwo = document.querySelector(".forecast-temp-two");
const forecastTempThree = document.querySelector(".forecast-temp-three");
const forecastTempFour = document.querySelector(".forecast-temp-four");

const currentDayIcon = document.querySelector(".current-day-icon");
const forecastOneIcon = document.querySelector(".forecast-one-icon");
const forecastTwoIcon = document.querySelector(".forecast-two-icon");
const forecastThreeIcon = document.querySelector(".forecast-three-icon");
const forecastFourIcon = document.querySelector(".forecast-four-icon");

function loadDataForecast() {
  fetch(url2)
    .then((rep) => rep.json())
    .then((data) => {
      const tempDayOne = data.data[1].temp;
      const tempDayTwo = data.data[2].temp;
      const tempDayThree = data.data[3].temp;
      const tempDayFour = data.data[4].temp;

      forecastTempOne.innerHTML = parseInt(tempDayOne) + "ºC";
      forecastTempTwo.innerHTML = parseInt(tempDayTwo) + "ºC";
      forecastTempThree.innerHTML = parseInt(tempDayThree) + "ºC";
      forecastTempFour.innerHTML = parseInt(tempDayFour) + "ºC";

      const currentDayIconID = data.data[0].weather.icon;
      const forecastOneIconID = data.data[1].weather.icon;
      const forecastTwoIconID = data.data[2].weather.icon;
      const forecastThreeIconID = data.data[3].weather.icon;
      const forecastFourIconID = data.data[4].weather.icon;

      weather.innerHTML = data.data[0].weather.description;
      currentDayIcon.src = `img/icons/${currentDayIconID}.png`;
      forecastOneIcon.src = `img/icons/${forecastOneIconID}.png`;
      forecastTwoIcon.src = `img/icons/${forecastTwoIconID}.png`;
      forecastThreeIcon.src = `img/icons/${forecastThreeIconID}.png`;
      forecastFourIcon.src = `img/icons/${forecastFourIconID}.png`;
    });
}
