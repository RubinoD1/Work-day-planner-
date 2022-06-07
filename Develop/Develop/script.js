//Links to the "id = currentDay", so the calender can be set to display as its text on screen. 
var currentDay = $("#currentDay");
var scheduleHour = $(".time-block");

//sets the format of the calender to be displayed in the header
var calenderSet = moment().format('MMMM Do YYYY, h:mm:ss a');
//sets the text in the HTML document with the moment.js calender defined in by var calenderSet 
currentDay.text(calenderSet);


//format for the moment.js hour to be used in detrmining if the hour is in the past, present, or future on the schedule
var trackHour = parseInt(moment().format("H"));
//console.log(trackHour)

//function to set the time-block colors.
function setColor(){
    scheduleHour.each(function() {
    var storeBlock = $(this);
    //convert string to number, so it can be compared to the current hour, that was also made into a number in "var trackHour"
    var timeBlockHr = parseInt(storeBlock.attr("id"));
        
if (timeBlockHr > trackHour){
//sets CSS style depending on the time-blocks relation to the current hour.    
    storeBlock.addClass("future");
    storeBlock.removeClass("present past");
}
if (timeBlockHr < trackHour){
    storeBlock.addClass("past");
    storeBlock.removeClass("present future"); 
}
if (timeBlockHr == trackHour){
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
   var timeblockHr = $(this).parent().attr("id"); 
   //saves to local storage 
     localStorage.setItem(timeblockHr, textConent);
});

//load LocalStorage, for the schedule we need the text that was inputted into the textarea of the HTML and the corresponding time-block.  
var loadInfo =function() {
    $("#8 .text-save").val(localStorage.getItem("8"));
    $("#9 .text-save").val(localStorage.getItem("9"));
    $("#10 .text-save").val(localStorage.getItem("10"));
    $("#11 .text-save").val(localStorage.getItem("11"));
    $("#12 .text-save").val(localStorage.getItem("12"));
    $("#13 .text-save").val(localStorage.getItem("13"));
    $("#14 .text-save").val(localStorage.getItem("14"));
    $("#15 .text-save").val(localStorage.getItem("15"));
    $("#16 .text-save").val(localStorage.getItem("16"));
};

loadInfo();
setColor();


















