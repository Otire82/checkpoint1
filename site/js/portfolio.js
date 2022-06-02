/***************    JS    1    ***************/
 let changeImage = document.querySelector('.portrait');
 changeImage.addEventListener('click', 
 function() {
    changeImage.src = 'https://cdn.pixabay.com/photo/2015/11/13/20/15/light-bulb-1042480__340.jpg';
    }
 );
 /***************    JS    2    ***************/

let button = document.querySelector('#button')

button.addEventListener('click', promptMe);
function promptMe(){
    let currentName = document.querySelector('#name')
    let newName = prompt("Your name?");
     currentName.innerText = newName;
     //manque changement couleur name
     //document.newName.style.color = 'white';
};
 /***************    JS    3   ***************/
//pink-bg couleur  #750ff7 avec clic bouton
//manque sur le footer
let button1 = document.querySelector('#button');
let element = document.querySelector('.pink-bg');
let box = getComputedStyle(element);


button1.addEventListener("click", function() {
  changecolor('#750ff7');
  
}, false );
function changecolor(code) {
    element.style.backgroundColor = code;
    box.style.backgroundColor = code;
    
 };

