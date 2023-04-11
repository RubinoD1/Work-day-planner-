# Work Day Planner

# Links
GitHub repository:https://github.com/RubinoD1/Work-day-planner-

GitHub live page:https://rubinod1.github.io/Work-day-planner-/

# General Notes
- Created a JS file, so that the HTML doucment wouldn't get out of hand with all the code being added.
- I didn't like the Font Awesome save icons. So, I decided to use a button labeled "Save" instead of replacing the default button. 
- I used Bootstap for the adjustable break points that media queries would normally do in the CSS, "row, col-sm , col-md, col-lg", etc.  


# Current day is displayed at the top of the calender
- I went with the full date, year, and time format. When working with a planner you to be able to quickly confirm all of this information.  

# When I scroll down then I am presented with time blocks for standard business hours
- The timeblocks were set to start at 8 A.M., and end at 5 P.M. 

# Each time block is color-coded to indicate whether it is in the past, present, or future
- I made use of the existing classes in the CSS file such as ".time-block" and created a DOM element linking it to the JS file. 
- Moment.js was used to get the current hour, which was then converted from a string to a number using parseInt. This was done so that it could be compared with each time-block's designated hour. 
- A function was created to compare the current hour with the schedules time-blocks. Depending if the time is greater, less, or equal to the current hour a class was added to set the color of that time block. 

# When I click into a time block then I can enter an event
- A textarea was created for each timeblock. When the textarea is clicked on, text can be entered to that block. 

# When I click the save button for that time block then the text for that event is saved in local storage
- Used the Jquery .on() and linked it to the save button to listen for a click event. 
- On click a function runs that saves the users inputted text and its associated time block hour to local storage. 

# When I refresh the page then the saved events persist
- on page load the "loadInfo" function runs getting the set info from local storage. 

# Screenshots

![Live site screenshots](/assets/images/image1.png)

![Live site screenshots](/assets/images/image2.png)

![Live site screenshots](/assets/images/image3.png)