# DailyCalendar
Calendar

## Head 
 
 <!-- Links -->
[Bootstrap Stylesheet](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css")
    
[Bootstrap CSS](]https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")

[Font Awesome StyleSheet](https://use.fontawesome.com/releases/v5.8.1/css/all.css" )

[Google Stylesheet API](https://fonts.googleapis.com/css?family=Open+Sans&display=swap"rel="stylesheet")

<!-- Title -->
Week Day Scheduler
## Body

<!-- Header -->
<!-- Code Blocks -->
`<h1>Work Day Scheduler</h1>`

`<p>A simple calendar app for scheduling your work day</p>`

<!-- 10 Rows of Form Buttons Spanning from 8AM to 5PM-->
<div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">8AM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="eightam-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="eightam-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">9AM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="nineam-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="nineam-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">10AM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="tenam-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="tenam-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">11AM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="elevenam-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="elevenam-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">12PM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="twelvepm-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="twelvepm-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">1PM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="onepm-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="onepm-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">2PM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="twopm-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="twopm-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">3PM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="threepm-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="threepm-button">Button</button>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">4PM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="fourpm-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="fourpm-button">Button</button>
      </div>
      </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">5PM</span>
      </div>
      <input type="text" class="form-control" placeholder="Enter Appointment" aria-label="Recipient's username" aria-describedby="fivepm-button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="fivepm-button">Button</button>
      </div>
    </div>

<!-- Links to JavaScript -->
[Java Script For Form Color](https://code.jquery.com/jquery-3.4.1.min.js")
[Moment API For Local Time In The Jumbotron](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js)
[Moment API](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js")
[Link to Java Script Page](script.js)


## JavaScript

```JavaScript

// Set Variables
let button = document.getElementById("eightam-button");  
let dateArray = document.getElementsByClassName("form-control";
let currentTime = moment().format("H");
let date = moment().format("dddd, DD/MM/YYYY");
let appointment = {};
    if (window.localStorage.getItem(date) !== null) {
        appointment = JSON.parse(window.localStorage.getItem(date));
        for (let storage = 0; storage < dateArray.length; storage++) {
            dateArray[storage].placeholder = appointment[storage];
            
//JQuery Using the id of Date Dusplay Date in the Head
$("#date").text(date);


// Block of Code For Looping Date Array Variable Colores To Time of Day
$("#date").text(date);

    function appointmentColor(currentTime) {
        for (let i = 0; i < dateArray.length; i++) {
            if (currentTime - 8 > i){
                dateArray[i].classList.add("redblock");
            } else if (currentTime - 8 === i) {
                dateArray[i].classList.add("yellowblock");
            } else {
                dateArray[i].classList.add("greenblock");
            }
        }  
    }
    appointmentColor(currentTime);

// Function For Saving Data In Local Storage
function save() {
        for(let x = 0; x < dateArray.length; x++) {
            appointment[x] = dateArray[x].value;
            window.localStorage.setItem(date, JSON.stringify(appointment));
        }
    }


Setting Up Button Targets To Enter Data When Clicked
document.querySelector(".container") .addEventListener("click", function(e) {
      event.preventDefault();
      if(e.target.type == "button") {
          save();
      }