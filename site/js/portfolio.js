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
     //newName.style.color = 'white';
};

