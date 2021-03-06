// collect all buttons.
const buttons = document.querySelectorAll("button");

// display screen.
const display = document.querySelector(".display");

// answer screen.
const answer = document.querySelector(".answer");

// add event listner to each button.
buttons.forEach(
    function(button) {
        button.addEventListener('click', calculate);
    }
);

let j = 0;

// calculate function.
function calculate(event) {

    // get clicked button value.
    const btnClickedVal = event.target.value;

    if(btnClickedVal === '=') {

        // calculate if display screen is empty.
        if(display.value !== '') {
           let result = +eval(display.value);
           answer.value = '=' + ' ' + Math.round(result);
        }

    } 
    
    // clear everything on screen.
    else if(btnClickedVal === 'c') {
        display.value = '';
        answer.value = '';
    }
    
    // brackets
    else if(btnClickedVal === 'bracket') {
        
        if(j === 0) {
           display.value += '(';
           j = 1;
        }
        else if(j === 1) {
            display.value += ')';
            j = 0;
        }
    }

    // backspace.
    else if(btnClickedVal === 'backspace') {
        let x = display.value;
        x = x.substring(0, x.length - 1); // remove last character.
        display.value = x;
    }
    
    // otherwise concatenate to the display screen.
    else {
        display.value += btnClickedVal;
    }
}