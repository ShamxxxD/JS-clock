let time = document.querySelector('.time');
let greeting = document.querySelector('.greeting');
let myName = document.querySelector('.my-name');
let myFocus = document.querySelector('.my-focus');

console.log (time, greeting, myName, myFocus);

function showTime ( ) {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let second = today.getSeconds();

    // output time
    time.innerText = `${hour}:${addZero(minutes)}:${addZero(second)}`;
    setTimeout(showTime, 1000);
}

function addZero(number) {
    if (number < 10) {
        return '0' + number;
    }else {
        return number;
    }
}




// set background
 function setBackground() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12 ) { 
        document.body.style.backgroundImage = "url('./img/Morning.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        greeting.innerText = 'Good Morning, ';
    } else if (hour < 18){
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        greeting.innerText = 'Good afternoon, ';

    }else {
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white';
        greeting.innerText = 'Good evening, ';
    }
 }


//   GeT Name

function getName() {
    if (localStorage.getItem('name') === '' ) {
        myName.innerText = 'Sir'
    } else {
        myName.innerText = localStorage.getItem('name');
    }

}



// GET FOCUS

function getFocus() {
    if (localStorage.getItem('focus') === '' ) {
        myFocus.innerText = 'Enter focus'
    } else {
        myFocus.innerText = localStorage.getItem('focus');
    }
}


showTime();
setBackground()
getName()
getFocus();   


// event 
myName.addEventListener('keydown', setName);

// set name 
function setName(event) {
    if(event.key === 'Enter') {
        localStorage.setItem('name', event.target.innerText);
        myName.blur();
    } else { 
        localStorage.setItem('name', event.target.innerText);
    }

};



// event 
myFocus.addEventListener('keydown', setFocus);

// set focus
function setFocus(event) {
    if(event.key === 'Enter') {
        localStorage.setItem('focus', event.target.innerText);
        myFocus.blur();
    } else { 
        localStorage.setItem('focus', event.target.innerText);
    }

};

