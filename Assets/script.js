//This will wait till the page is fully loaded to start events
$(function () {
  var today = dayjs().format("dddd, MMMM D");
  var currentHour = dayjs().hour;
  //contains references to all timeblock ids and makes them to a number(so it can be compared to current hour)
  var allHours = [
    $("#9").attr("id"),
    $("#10").attr("id"),
    $("#11").attr("id"),
    $("#12").attr("id"),
    $("#13").attr("id"),
    $("#14").attr("id"),
    $("#15").attr("id"),
    $("#16").attr("id"),
    $("#17").attr("id"),
  ];
  //similar to allHours but only references ID
  var hourIds = [
    $("#9"),
    $("#10"),
    $("#11"),
    $("#12"),
    $("#13"),
    $("#14"),
    $("#15"),
    $("#16"),
    $("#17"),
  ];
  // on click, the value of the text area and the id are stored in variables, then are used to set local storage key and value
  $("button").click(function () {
    var blockText = $(this).siblings("textarea").val();
    var blockTime = $(this).parent().attr("id");
    localStorage.setItem(blockTime, blockText);
  });

  // sets the class for stle depending on the time of the day
  for (let i = 0; i < allHours.length; i++) {
    if (allHours[i] == currentHour) {
      $(hourIds[i]).addClass("present");
    } else if (allHours[i] > currentHour) {
      $(hourIds[i]).addClass("future");
    } else {
      $(hourIds[i]).addClass("past");
    }
  }
  //runs to see if there is anything in the time block within the local memory, if so pulls it and sets the value
  for (let i = 0; i < allHours.length; i++) {
    $(hourIds[i]).children().eq(1).val(localStorage.getItem(allHours[i]));
  }
  //sets the current time in the header
  $("#currentDay").text(today);
});
