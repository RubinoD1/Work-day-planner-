//Links to the "id = currentDay" in the HTML, so the calender can be set to display as its text on screen. 
var currentDay = $("#currentDay");
//Links to the "time-block" class 
var scheduleHour = $(".time-block");

//sets the format of the calender to be displayed in the header using moment.js
var calenderSet = moment().format('MMMM Do YYYY, h:mm:ss a');
//sets the text in the HTML document with the moment.js calender defined by var calenderSet 
currentDay.text(calenderSet);


//format for the moment.js hour to be used in detrmining if the hour is in the past, present, or future on the schedule.
//using parse to convert the string into a number
var trackHour = parseInt(moment().format("H"));


//function to set the time-block colors.
function setColor(){
  scheduleHour.each(function() {
    var storeBlock = $(this);
    //convert string to number, so it can be compared to the current hour.
    var timeBlockHr = parseInt(storeBlock.attr("id"));
//sets CSS style depending on the time-blocks relation to the current hour.        
if (timeBlockHr > trackHour)
{
    storeBlock.addClass("future");
    storeBlock.removeClass("present past");

}else if (timeBlockHr < trackHour)
{
    storeBlock.addClass("past");
    storeBlock.removeClass("present future"); 

}else if (timeBlockHr == trackHour)
{
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

//load localStorage, for the schedule we need the text that was inputted into the textarea of the HTML and the corresponding time-block.  
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


















