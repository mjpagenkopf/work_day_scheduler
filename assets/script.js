   //displays the date and time
$('#currentDay').text(moment().format("LLLL"));  
    //creating inside container: divs, classes and id names:
    // ".description", ".time-block", ".row", ".hour", ".past", ".present", ".past"
const hourIndex = [
    { //array index [0] object 9am
        spot: 0,
        hour: 09,
        display: "9 am",
        task:"",
    },
    { //array index [1] object 10am
        spot: 1,
        hour: 10, 
        display: "10 am",
        task:"",
    },
    { //array index [2] object 11am
        spot: 2,
        hour: 11,
        display: "11 am",
        task:"",
    },
    { //array index [3] object 12pm
        spot: 3,
        hour: 12,
        display: "12 pm",
        task:"",
    },
    { //array index [4] object 1pm
        spot: 4,
        hour: 13,
        display: "1 pm",
        task:"",
    },
    { //array index [5] object 2pm
        spot: 5,
        hour: 14,
        display: "2 pm",
        task:"",
    },
    { //array index [6] object 3pm
        spot: 6,
        hour: 15,
        display: "3 pm",
        task:"",
    },
    { //array index [7] object 4pm
        spot: 7,
        hour: 16,
        display: "4 pm",
        task:"",
    },
    { //array index [8] object 5pm
        spot: 8,
        hour: 17,
        display: "5 pm",
        task:"",
    },
];
//saving to local storage
function saveSchedule() {
    localStorage.setItem('hourIndex', JSON.stringify(hourIndex)); 
}
// pulling from local storage. currentHour = hourIndex
function displaySchedule() {
    hourIndex.forEach(function (currentHour) {
        $(`#${currentHour.spot}`).val(currentHour.task)
        
    })
}
//initialize function here
function init() {
    let hourIndex = JSON.parse(localStorage.getItem('hourIndex'));
    hourIndex.forEach(function (currentHour, i) {
        $(`#hour-${i}`).val(currentHour.task)
    })
    displaySchedule();
}


hourIndex.forEach(function(currentHour, i) {
    //for classes time-block row
    let $rowDiv = $('<div>')
    .addClass('time-block row')
    $('.container').append($rowDiv);
    //for classes col-md-2 hour
    let $hourDiv = $('<div>')
    .addClass('col-md-1 hour')
    .text(`${currentHour.display}`)
    $rowDiv.append($hourDiv)
    //for classes col-md-10 description p-0
    let $textDiv = $('<div>')
    .addClass('col-md-10 description')
    
    $rowDiv.append($textDiv)
    //add the past, present and future classes and <textarea>
    $colorHour = $('<textarea>').attr('id', `hour-${i}`)
    $textDiv.append($colorHour)
    $rowDiv.attr('spot', currentHour.spot);
    //using moment api to match time with .past, .present, .future classes                 
    if (currentHour.hour < moment().format('HH')) {
        $colorHour.addClass('past')
    } else if 
        (currentHour.hour == moment().format('HH')) {
        $colorHour.addClass('present')
        }
        else if
        (currentHour.hour > moment().format('HH')) {
        $colorHour.addClass('future')
        }

    //for classes col-md-1 saveBtn and <i> with class far-fa-save
    let $buttonDiv = $('<button>')
    .addClass('col-md-1 saveBtn')
    .append('<i class="fas fa-save"></i>') 
    $rowDiv.append($buttonDiv)     
}); 

 
// use the jQuery methods (.on, .one) instead of addEventListener.
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    //this = the button, i selects the array index using spot, textValue stores user input
    const i = $(this.parentElement).attr("spot");
    const textValue = $(this).siblings('.description').children("textarea").val();

    hourIndex[i].task = textValue;

    saveSchedule();
    displaySchedule();

});

init(); 



   
//$('[href]') if selector doesn't have class/id

