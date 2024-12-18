function changeDate(event){
    //los-angeles
    
        let losAngeleseElement = document.querySelector("#los-angeles");
        if (losAngeleseElement) {
          losAngeleseElement = losAngeleseElement.querySelector(".date");
          losAngeleseElement.innerHTML = moment().format("MMMM Do YYYY");

          let losAngeleseTime = document.querySelector("#los-angeles .time");
          losAngeleseTime.innerHTML = moment()
            .tz(event.target.value)
            .format("h:mm:ss A");
        }
    //Sydney
    
    let sydneyElement = document.querySelector("#Sydney");
    if (sydneyElement) {
      sydneyElement = sydneyElement.querySelector(".date");
      sydneyElement.innerHTML = moment().format("MMMM Do YYYY");

      let sydneyTime = document.querySelector("#Sydney .time");
      sydneyTime.innerHTML = moment()
        .tz(event.target.value)
        .format("h:mm:ss A");
    }

    //Tokyo
    
      let tokyoElement = document.querySelector("#Tokyo");
      if (tokyoElement) {
        tokyoElement = tokyoElement.querySelector(".date");
        tokyoElement.innerHTML = moment().format("MMMM Do YYYY");

        let tokyoTime = document.querySelector("#Tokyo .time");
        tokyoTime.innerHTML = moment()
          .tz(event.target.value)
          .format("h:mm:ss A");
      } 
    //paris
    
      let parisElement = document.querySelector("#Paris");
      if (parisElement) {
        parisElement = parisElement.querySelector(".date");
        parisElement.innerHTML = moment().format("MMMM Do YYYY");

        let parisTime = document.querySelector("#Paris .time");
        parisTime.innerHTML = moment()
          .tz(event.target.value)
          .format("h:mm:ss A");
      }
}



let chooseCities = document.querySelector("#choose-city");
chooseCities.addEventListener("change", changeDate);