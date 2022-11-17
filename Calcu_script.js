let inputupper = document.querySelector("#upper");
let inputlower = document.querySelector("#lower");

function pressNum(e) {
    if (inputlower === '0')
        inputlower.innerHTML = e.innerHTML;
    else
        inputlower.innerHTML += e.innerHTML;
}
function pressClearAll() {
    inputlower.innerHTML = ' ';
    inputupper.innerHTML = ' ';
}
function pressClear() {
    inputlower.innerHTML = inputlower.innerHTML.slice(0, -1);
}
function pressOperator(e) {

    let lastOperator = inputlower.innerHTML.slice(-1);
    if (lastOperator === '+' || lastOperator === '-' || lastOperator === '×' || lastOperator === '÷') {
        inputlower.innerHTML = inputlower.innerHTML.slice(0, -1) + e.innerHTML;
    } else {
        inputlower.innerHTML += e.innerHTML;
    }
}
function pressDot() {
    inputlower.innerHTML += ' ';
}
// function pressBracket1(e) {
//     inputlower.innerHTML += e.innerHTML;
// }
// function pressBracket2(e) {
//     inputlower.innerHTML += e.innerHTML;
// }
function pressEquals() {
    let exp = inputlower.innerHTML;
    inputupper.innerHTML = exp;
    exp = exp.replace(/x/g, '*');
    let result;
    try {
        result = eval(exp);
        if (result.toString().indexOf('.') !== -1) {
            result = result.toFixed(4);
        }
    } catch (e) {
        result = 'Error';
    }
    inputlower.innerHTML = result;
}
function pressMod(){
    
}
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case '0':
            pressNum(document.querySelector('button:nth-child(17)'));
            break;
        case '1':
            pressNum(document.querySelector('button:nth-child(13)'));
            break;
        case '2':
            pressNum(document.querySelector('button:nth-child(14)'));
            break;
        case '3':
            pressNum(document.querySelector('button:nth-child(15)'));
            break;
        case '4':
            pressNum(document.querySelector('button:nth-child(9)'));
            break;
        case '5':
            pressNum(document.querySelector('button:nth-child(10)'));
            break;
        case '6':
            pressNum(document.querySelector('button:nth-child(11)'));
            break;
        case '7':
            pressNum(document.querySelector('button:nth-child(5)'));
            break;
        case '8':
            pressNum(document.querySelector('button:nth-child(6)'));
            break;
        case '9':
            pressNum(document.querySelector('button:nth-child(7)'));
            break;
        case '+':
            pressOperator(document.querySelector('button:nth-child(16)'));
            break;
        case '-':
            pressOperator(document.querySelector('button:nth-child(12)'));
            break;
        case '*':
            pressOperator(document.querySelector('button:nth-child(8)'));
            break;
        case '/':
            pressOperator(document.querySelector('button:nth-child(4)'));
            break;
        case '.':
            pressDot();
            break;
        case '%':
            pressMod();
            break;
        // case ')':
        //     pressBracket2();
        //     break;
        case 'Enter':
            e.preventDefault();
            pressEqual();
            break;
        case 'Backspace':
            pressClear();
            break;
        case 'Escape':
            pressAllClear();
            break;
    }
});