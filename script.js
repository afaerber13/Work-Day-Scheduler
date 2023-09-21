// Current date
const currentDay = dayjs();
const formattedDay = currentDay.format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDay);

$("#currentDay").text(dayjs().format('dddd, MMMM DD YYYY'));

// Define variables
var timeBlockEl = document.querySelector(".containter");
var parent = $(this).parents(".row");
var currentTime = dayjs().format("HH");


// Functions
function auditTask(){
   
  $(".time-block").each(function (){  
  var hourId = $(this).attr("id").split("-")[1];
  
  console.log(hourId);
  console.log(currentTime);
  if(hourId < currentTime){
    $(this).addClass ("past");
  }
  else if(hourId === currentTime){
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass ("present");
  }
  else{
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass ("future");
  }
})
}

auditTask();

// Event listener for saveBtn
$(".saveBtn").on("click", function(){
  var textValue = $(this).siblings('.description').val();
  var timeKey = $(this).parent().attr('id');
  localStorage.setItem(timeKey, textValue);
});

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

$("#clearFieldsBtn").click(function(event) {
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});

