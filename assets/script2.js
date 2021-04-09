// GetElementsByClass('row');
// GetElementsByClass('time-block')
// GetElementsByClass('col-md-1 hour')
// GetElementsByClass('col-md-10')
// GetElementsByClass('description');
// GetElementsByClass('btn')
// GetElementsByClass('saveBtn');
// GetElementsByClass('col-md-1');

// GetElementyById('hour-09')
// GetElementyById('hour-10')
// GetElementyById('hour-11')
// GetElementyById('hour-12')
// GetElementyById('hour-13')
// GetElementyById('hour-14')
// GetElementyById('hour-15')
// GetElementyById('hour-16')
// GetElementyById('hour-17')

//page can't be manipulated until the document is "ready."
$(document).ready(function() {
    //display day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js










    
    //for getting schedule from local storage first, if there
        let scheduleStr = JSON.parse(localStorage.getItem("scheduleStr"));

    //assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //siblings() method searches through the siblings of the elements in the DOM tree
        let text = $(this).siblings(".description").val(); 
        let time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        //set items in local storage.
        localStorage.setItem(time, text);
    })

    $("#hour-09 .description").val(localStorage.getItem("hour09"));
    $("#hour-10 .description").val(localStorage.getItem("hour10"));
    $("#hour-11 .description").val(localStorage.getItem("hour11"));
    $("#hour-12 .description").val(localStorage.getItem("hour12"));
    $("#hour-13 .description").val(localStorage.getItem("hour13"));
    $("#hour-14 .description").val(localStorage.getItem("hour14"));
    $("#hour-15 .description").val(localStorage.getItem("hour15"));
    $("#hour-16 .description").val(localStorage.getItem("hour16"));
    $("#hour-17 .description").val(localStorage.getItem("hour17"));

    function hourTracker() {
        //get current number of hours.
        let currentHour = moment().hour(); // use of moment.js

        // loop over time blocks
        $(".time-block").each(function () {
            let hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourBlock, currentHour)

            //check if we've moved past this time, click into css/html given classes of past, present, or future
            if (hourBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-run function
