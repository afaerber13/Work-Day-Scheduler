// Define variables
var timeBlockEl = document.querySelector(".containter");
var timeBlock = $(".hour");
var parent = $(this).parents(".row");
var currentTime = parseInt(dayjs().format("H"));
// Current date
const currentDay = dayjs();
const formattedDay = currentDay.format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDay);

$("#currentDay").text(dayjs().format('dddd, MMMM DD YYYY'));


// Functions
function timeTracker(){
    $(".time-block").each(function (){
    var hourId = parseInt(parent.attr("id"));
    if(hourId < currentTime){
      $(this).addClass ("past");
    }
    else if(hourId === currentTime){
      $(this).addClass ("present");
    }
    else{
           $(this).addClass ("future");
    }
  })
}

// Event listener for saveBtn
$(".saveBtn").on("click", function(){
})

// Get item from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

timeTracker();

