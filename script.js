    let button = document.getElementById("eightam-button");  
    let dateArray = document.getElementsByClassName("input-group-prepend");
    let currentTime = moment().format("H");
    let date = moment().format("dddd, DD/MM/YYYY");
    $("#date").text(date);
    
    function appointmentColor(currentTime) {
        for(let i = 0; i < dateArray.length; i++) {
            if (currentTime - 8 > i){
                dateArray[i].classList.add("redblock");
            }
        }  
    }



    // let appointment= localStorage.getItem('');

    // button.addEventListener("click", function(event){
    
    
    
   














//var cat = localStorage.getItem('myCat');