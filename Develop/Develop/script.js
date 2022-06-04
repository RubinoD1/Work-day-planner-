//Links to the "id = currentDay", so the calender can be set to display as its text on screen. 
var currentDay = $("#currentDay");

//sets the format of the calender to be displayed in the header
var calenderSet = moment().format('MMMM Do YYYY, h:mm:ss a');
//format for the moment.js hour to be used in detrmining if the hour is past, present, or future on the schedule
var trackHour = moment().format("H");

//sets the text in the HTML document with the moment.js calender defined in by var calenderSet 
currentDay.text(calenderSet);














/*Notes
1. Time does not update in real time in the header. 

*/