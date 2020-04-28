const display = document.querySelector('.display-p');
let operator = '';
let operands = [];  
let operandsIndex = 0;

function addCalc (a, b) {
    return a+b;
}

function subtractCalc (a, b) {
    return a-b;
}

function multiplyCalc (a, b) {
    return a*b;
}

function divideCalc (a, b) {
    return a/b;
}

function operate (operator, a, b) {
    if (operator==='\+') {
        return addCalc(a,b);
    } else if (operator==='\-') {
        return subtractCalc(a,b);
    } else if (operator==='\*') {
        return multiplyCalc(a,b);
    } else {
        return divideCalc(a,b);
    }
}

function evaluateInput(e) {
    if (e.target.textContent==='\=') {
        console.log(operator,operands);
        replaceDisplay(operate(operator, Number(operands[0]), Number(operands[1])));
    } else if (e.target.textContent==='\+'||e.target.textContent==='\-'||e.target.textContent==='\*'||e.target.textContent==='\/') {
        operator = e.target.textContent;
        operandsIndex++;
        addToDisplay(operator);
    } else if (e.target.textContent==='CE') {
        operator = '';
        operands = [];  
        operandsIndex = 0;
        replaceDisplay('');
        //console.log(operator,operands);
    } else {
        let t = operands[operandsIndex];
        if (operands[operandsIndex]==undefined) {
            operands[operandsIndex] = e.target.textContent;
        } else {
            operands[operandsIndex] = t+e.target.textContent;
        }
        // console.log(operands[operandsIndex]);
        addToDisplay(e.target.textContent);
    }

}

function addToDisplay (char) {
    display.textContent += char;
}

function replaceDisplay (result) {
    display.textContent = result;
}

const btns = Array.from(document.querySelectorAll('.button-div'));
btns.forEach(btn => btn.addEventListener('click', evaluateInput));