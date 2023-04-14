//Links to the "time-block" class 
const scheduleHour = $(".time-block");

//updates the HTML of the #currentDay in the header to the current time. Set to 1000 millisecond interval (1 sec). 
function clockUpdate() {
    document.querySelector("#currentDay").innerHTML = 
    `<h2>${moment().format('MMMM Do YYYY, h:mm:ss a')} </h2>`;
}

//format for the moment.js hour to be used in determining if the hour is in the past, present, or future on the schedule.
const trackHour = parseInt(moment().format("H")); //using parse to convert the string into a number.


//function to set the time-block colors.
function setColor() {
  scheduleHour.each(function() {
    var storeBlock = $(this);
    //convert string to number, so it can be compared to the current hour.
    var timeBlockHr = parseInt(storeBlock.attr("id"));
   //sets CSS style depending on the time-blocks relation to the current hour.        
   if (timeBlockHr > trackHour) {
    storeBlock.addClass("future");
    storeBlock.removeClass("present past");
   } else if (timeBlockHr < trackHour) {
    storeBlock.addClass("past");
    storeBlock.removeClass("present future"); 
   } else if (timeBlockHr == trackHour) {
    storeBlock.addClass("present");
    storeBlock.removeClass("past future");
   }
});
}


//save and load functions 
//using the jquery .on() function to listen for a click event on the "".saveBtn"
$(".saveBtn").on("click", function () {
   //jquery looks for all the ".text-save" classes and gets their value. 
   var textConent = $(this).siblings(".text-save").val(); 
   //jquery searches for the "id" where the time-block's value has been set.  
   var timeblockHr = $(this).parent().attr("id"); 
   //saves to local storage 
   localStorage.setItem(timeblockHr, textConent);
});

//load localStorage 
function loadInfo() {
    $("#0 .text-save").val(localStorage.getItem("0"));
    $("#1 .text-save").val(localStorage.getItem("1"));
    $("#2 .text-save").val(localStorage.getItem("2"));
    $("#3 .text-save").val(localStorage.getItem("3"));
    $("#4 .text-save").val(localStorage.getItem("4"));
    $("#5 .text-save").val(localStorage.getItem("5"));
    $("#6 .text-save").val(localStorage.getItem("6"));
    $("#7 .text-save").val(localStorage.getItem("7"));
    $("#8 .text-save").val(localStorage.getItem("8"));
    $("#9 .text-save").val(localStorage.getItem("9"));
    $("#10 .text-save").val(localStorage.getItem("10"));
    $("#11 .text-save").val(localStorage.getItem("11"));
    $("#12 .text-save").val(localStorage.getItem("12"));
    $("#13 .text-save").val(localStorage.getItem("13"));
    $("#14 .text-save").val(localStorage.getItem("14"));
    $("#15 .text-save").val(localStorage.getItem("15"));
    $("#16 .text-save").val(localStorage.getItem("16"));
    $("#17 .text-save").val(localStorage.getItem("17"));
    $("#18 .text-save").val(localStorage.getItem("18"));
    $("#19 .text-save").val(localStorage.getItem("19"));
    $("#20 .text-save").val(localStorage.getItem("20"));
    $("#21 .text-save").val(localStorage.getItem("21"));
    $("#22 .text-save").val(localStorage.getItem("22"));
    $("#23 .text-save").val(localStorage.getItem("23"));
};


loadInfo(); // local storage 
setColor(); //updates the time block css based on time of day 
clockUpdate(); //sets the date/time in the header based on the current time.  
setInterval(clockUpdate, 1000); //timer to update the time in the HTML in real time. 1000 milliseconds = 1 second. 














