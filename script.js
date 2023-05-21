const greeting = document.querySelector(".greeting");
const nameSpan = document.querySelector(".span-name");

// function that accepts an html element and time and waits that time to remove the hidden class
function removeHidden(element, time) {
  setTimeout(function () {
    element.classList.remove("hidden");
    element.classList.add("fade-in");
  }, time);
}

// // show greeting after 1 second
removeHidden(greeting, 300);
removeHidden(nameSpan, 750);
