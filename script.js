let operators = [];
let operands = [];  
let operandsIndex = 0;
let calcJustPerformed = false;

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

function operate (operators, operands) {
    let numOperands = operands.map(str => Number(str));
    
    operators.map((operator, operatorIndex) => {
        if (operator==='\*') {
            const arrayItemCalc = multiplyCalc(numOperands[operatorIndex],numOperands[operatorIndex+1]);
            numOperands[operatorIndex] = ' ';
            numOperands[operatorIndex+1] = arrayItemCalc;
        }
        if (operator==='\/') {
            const arrayItemCalc = divideCalc(numOperands[operatorIndex],numOperands[operatorIndex+1]);
            numOperands[operatorIndex] = ' ';
            numOperands[operatorIndex+1] = arrayItemCalc;
        }
        return operator;
    });
    
    numOperands = numOperands.filter(item => {
        const regex = RegExp(' ');
        return !regex.test(item);
    });
    
    operators = operators.filter(item => {
        const regex = /\*|\//;
        return !regex.test(item);
    });

    operators.map((operator, operatorIndex) => {
        if (operator==='\+') {
            const arrayItemCalc = addCalc(numOperands[operatorIndex],numOperands[operatorIndex+1]);
            numOperands[operatorIndex] = ' ';
            numOperands[operatorIndex+1] = arrayItemCalc;
        }
        if (operator==='\-') {
            const arrayItemCalc = subtractCalc(numOperands[operatorIndex],numOperands[operatorIndex+1]);
            numOperands[operatorIndex] = ' ';
            numOperands[operatorIndex+1] = arrayItemCalc;
        }
        return operator;
    });
    
    numOperands = numOperands.filter(item => {
        const regex = RegExp(' ');
        return !regex.test(item);
    });
    
    operators = operators.filter(item => {
        const regex = /\+|\-/;
        return !regex.test(item);
    });

    return numOperands;
}

function chngToNum(num) {
    num = num[0];
    if (num.toString().length > 8) { //change to exponential notation if larger than 8 digits
        num = num.toExponential(5);
    }
    num = num.toString();
    return num;
} 

function evaluateInput(e) {
    
    if (e.target.textContent==='\=' && operands.length>=2) {
        const output = chngToNum(operate(operators, operands));
        replaceDisplay(output);
        calcJustPerformed = true;
        operators = [];
        operands = [];
        operatorIndex = 0;
        operands[0] = output;
    } else if (e.target.textContent==='\+'||e.target.textContent==='\-'||e.target.textContent==='\*'||e.target.textContent==='\/') {
        if (calcJustPerformed===true) {
            operandsIndex = 0;
            calcJustPerformed=false;
        }
        operators.push(e.target.textContent);
        operandsIndex++;
        addToDisplay(e.target.textContent);
    } else if (e.target.textContent==='CE') {
        operators = [];
        operands = [];  
        operandsIndex = 0;
        calcJustPerformed = false;
        replaceDisplay('');
    } else if ((/[0-9]/i).test(e.target.textContent)) {
        if (calcJustPerformed===true) {
            operators = [];
            operands = [];  
            operandsIndex = 0;
            calcJustPerformed = false;
            replaceDisplay('');            
        }
        let t = operands[operandsIndex];
        if (operands[operandsIndex]==undefined) {
            operands[operandsIndex] = e.target.textContent;
        } else {
            operands[operandsIndex] = t+e.target.textContent;
        }
        addToDisplay(e.target.textContent);
    }
}

function addToDisplay (char) {
    display.textContent += char;
}

function replaceDisplay (result) {
    display.textContent = result;
}

const display = document.querySelector('.display-p');
const btns = Array.from(document.querySelectorAll('.button-div'));
btns.forEach(btn => btn.addEventListener('click', evaluateInput));