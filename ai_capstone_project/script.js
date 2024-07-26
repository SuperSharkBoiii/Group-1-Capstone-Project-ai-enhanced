function toggleLightMode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll('.home_text').forEach(element => {
      element.classList.toggle('light-mode');
  });
  document.querySelector('nav').classList.toggle('light-mode');
  document.querySelectorAll('button').forEach(element => {
      element.classList.toggle('light-mode');
  });
  document.querySelectorAll('a').forEach(element => {
      element.classList.toggle('light-mode');
  });
}

// Get the button:
let mybutton = document.getElementById("romanBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunctionR() {
  document.body.scrollTop = 350; // For Safari
  document.documentElement.scrollTop = 350; // For Chrome, Firefox, IE and Opera
  doc
m
}

let enriquebutton = document.getElementById("enriqueBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunctionE() {
  document.body.scrollTop = 775; // For Safari
  document.documentElement.scrollTop = 775; // For Chrome, Firefox, IE and Opera
}

let atalaybutton = document.getElementById("atalayBtn")

function topFunctionA() {
    document.body.scrollTop = 1200; // For Safari
    document.documentElement.scrollTop = 1200; // For Chrome, Firefox, IE and Opera
}
  
let adithyabutton = document.getElementById("adithyaBtn")

function topFunctionD() {
    document.body.scrollTop = 1500; // For Safari
    document.documentElement.scrollTop = 1500; // For Chrome, Firefox, IE and Opera
}