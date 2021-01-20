$(document).ready(function () {
    $("#9text").text(localStorage.getItem("9text"));
    $("#10text").text(localStorage.getItem("10text"));
    $("#11text").text(localStorage.getItem("11text"));
    $("#12text").text(localStorage.getItem("12text"));
    $("#13text").text(localStorage.getItem("13text"));
    $("#14text").text(localStorage.getItem("14text"));
    $("#15text").text(localStorage.getItem("15text"));
    $("#16text").text(localStorage.getItem("16text"));
    $("#17text").text(localStorage.getItem("17text"));

});

$("#scheduler").html("<h1>Work Day Scheduler</h1>");


// jQuery alternative to: var newDiv = document.createElement("div");
var headingDiv = $("<div>");

// jQuery alternative to: newDiv.textContent = "A pleasure to meet you!";
headingDiv.text("A simple calendar app for scheduling your day");

// jQuery alternative to: document.querySelector("#scheduler").appendChild(newDiv);
$("#scheduler").append(headingDiv);

rows = document.getElementsByClassName("col-sm-10");
    let currentHour = parseInt(moment().format('H'));

    Array.from(rows).forEach(row => {
        let
            rowIdString = row.id,
            rowHour;
        if (rowIdString) {
            rowHour = parseInt(rowIdString);
        }
        if (rowHour) {
            // Compares row id to current hour and sets color accordingly
            if (currentHour === rowHour) {
                setColor(row, "red");
            } else if ((currentHour < rowHour) && (currentHour > rowHour - 9)) {
                setColor(row, "green");
            } else if ((currentHour > rowHour) && (currentHour < rowHour + 9)) {
                setColor(row, "lightgrey");
            } 
            
        }
    });

    function setColor(element, color) {
        element.style.backgroundColor = color;
    }

var todayDateDiv = $("<div>");
todayDateDiv.html("<b>" + moment().format("dddd, MMMM Do") + "</b>");
$("#scheduler").append(todayDateDiv);

$('#calendar').click(function (event) {
    var element = event.target;
    if (element.nodeName == "BUTTON") {
        var textElementId = element.getAttribute('data-text-id');
        var textValue = document.getElementById(textElementId).value;
        localStorage.setItem(textElementId, textValue);
    }
     

});