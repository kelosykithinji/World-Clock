function changeDate(event){
    //los-angeles
    
        let losAngeleseElement = document.querySelector("#los-angeles");
        if (losAngeleseElement) {
          losAngeleseElement = losAngeleseElement.querySelector(".date");
          losAngeleseElement.innerHTML = moment()
            .tz("America/Los_Angeles")
            .format("MMMM Do YYYY");

          let losAngeleseTime = document.querySelector("#los-angeles .time");
          losAngeleseTime.innerHTML = moment()
            .tz("America/Los_Angeles")
            .format("h:mm:ss A");
        }
    //Sydney
    
    let sydneyElement = document.querySelector("#Sydney");
    if (sydneyElement) {
      sydneyElement = sydneyElement.querySelector(".date");
      sydneyElement.innerHTML = moment()
        .tz("Australia/Sydney")
        .format("MMMM Do YYYY");

      let sydneyTime = document.querySelector("#Sydney .time");
      sydneyTime.innerHTML = moment()
        .tz("Australia/Sydney")
        .format("h:mm:ss A");
    }
console.log()
    //Tokyo
    
      let tokyoElement = document.querySelector("#Tokyo");
      if (tokyoElement) {
        tokyoElement = tokyoElement.querySelector(".date");
        tokyoElement.innerHTML = moment()
          .tz("Asia/Tokyo")
          .format("MMMM Do YYYY");

        let tokyoTime = document.querySelector("#Tokyo .time");
        tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss A");
      } 
    //paris
    
      let parisElement = document.querySelector("#Paris");
      if (parisElement) {
        parisElement = parisElement.querySelector(".date");
        parisElement.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");

        let parisTime = document.querySelector("#Paris .time");
        parisTime.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss A");
      }
};
//this sets the seconds to update every second


function displayCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let differentCities = document.querySelector("#different-cities");
  differentCities.innerHTML = `<div class="cities-section">
      <div class="inner-cities-section">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time"> ${cityTime.format("h:mm:ss A")}
    </div> `;
  //you could use <a href="/">Go back to all cities</a>
  //to go back to the all cities page too
};

setInterval(changeDate, 1000);
changeDate();

let chooseCities = document.querySelector("#choose-city");
chooseCities.addEventListener("change", displayCity);