//Links to the "id = currentDay", so the calender can be set to display as its text on screen. 
var currentDay = $("#currentDay");
var scheduleHour = $(".time-block");




//sets the format of the calender to be displayed in the header
var calenderSet = moment().format('MMMM Do YYYY, h:mm:ss a');
//format for the moment.js hour to be used in detrmining if the hour is in the past, present, or future on the schedule

var convert = parseInt(moment().format("H"));
var trackHour = convert
//console.log(trackHour)

//var thisBlockHr = parseInt(scheduleHour.attr("data-hour"));
//console.log(thisBlockHr)



var test = function(){
    $(scheduleHour).each(function(){
  
var thisBlockHr = parseInt(scheduleHour.attr("data-hour"));
console.log(thisBlockHr)  
   
        
if (thisBlockHr > trackHour){
    console.log("A")
    scheduleHour.addClass("future");
    scheduleHour.removeClass("present past");
}
if (thisBlockHr < trackHour){
    console.log("B")
    scheduleHour.addClass("past");
    scheduleHour.removeClass("present future"); 
}
if (thisBlockHr == trackHour){
    console.log("C")
    scheduleHour.addClass("present");
    scheduleHour.removeClass("past future");
}
});
}
//test();
//sets the text in the HTML document with the moment.js calender defined in by var calenderSet 
currentDay.text(calenderSet);



///save and load functions 
//using the jquery .on() function to listen for a click event on the "".saveBtn"
$(".saveBtn").on("click", function () {
    //jquery looks for all the ".text-input" classes and gets their value. 
   var text = $(this).siblings(".text-save").val(); 
   var time = $(this).parent().attr("id"); 
   //saves to local storage 
     localStorage.setItem(time, text);
})

//load LocalStorage, for the schedule we need the text that was inputted into the textarea of the HTML and the scheduled hour.  
var loadInfo =function() {
    $("#8 .text-save").val(localStorage.getItem("8"));
    $("#15 .text-save").val(localStorage.getItem("15"));
}

loadInfo();












/*function to detrmine if a timeblock is in the past, present, or future and sets the color accordingly. 
setScheduleColor = function() {
    scheduleHour.each(function(){
         hourTimeBlock =(this);
         checkHour = parseInt(this.attr(data-index-hour));
    
*/











/*Notes
1. Time does not update in real time in the header. 
2. is the moment hour in 24hr format to check p.m.?
*/