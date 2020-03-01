let button = document.getElementById("eightam-button");  
    let dateArray = document.getElementsByClassName("form-control");
    let currentTime = moment().format("H");
    let date = moment().format("dddd, DD/MM/YYYY");
    let appointment = {};
    if (window.localStorage.getItem(date) !== null) {
        appointment = JSON.parse(window.localStorage.getItem(date));
        for (let storage = 0; storage < dateArray.length; storage++) {
            dateArray[storage].placeholder = appointment[storage];
            
        }

    } 
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
              if (currentTime + 8 > i) {
                  dateArray[i].classList.add("blueblock");
              }
        }  
    }

    appointmentColor(currentTime);

    function save() {
        for(let x = 0; x < dateArray.length; x++) {
            appointment[x] = dateArray[x].value;
            window.localStorage.setItem(date, JSON.stringify(appointment));
        }
    }
        
    
   document.querySelector(".container") .addEventListener("click", function(e) {
      event.preventDefault();
      if(e.target.type == "button") {
          save();
      }
   
    //   if($(this).is("button")) {
    //        console.log("button");
    //    }
   });       
    
    
  

    
    
    
    
    
   














