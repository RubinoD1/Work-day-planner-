//Links to the "id = currentDay", so the calender can be set to display as its text on screen. 
var currentDay = $("#currentDay");

//sets the format of the calender to be displayed in the header
var calenderSet = moment().format('MMMM Do YYYY, h:mm:ss a');

//sets the text in the HTML document with the moment.js calender defined in by var calenderSet 
currentDay.text(calenderSet);