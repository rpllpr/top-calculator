let operators = [];
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

function operate (operators, operands) {
    // console.log(operators);
    let numOperands = operands.map(str => Number(str));
    // console.log(numOperands);
    
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
        //const regex = RegExp('\\*');
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
        //const regex = RegExp('\\*');
        const regex = /\+|\-/;
        return !regex.test(item);
    });

    console.log(operators);
    console.log(numOperands);
    return numOperands;

}

function evaluateInput(e) {
    if (e.target.textContent==='\=') {
        replaceDisplay(operate(operators, operands));
    } else if (e.target.textContent==='\+'||e.target.textContent==='\-'||e.target.textContent==='\*'||e.target.textContent==='\/') {
        operators.push(e.target.textContent);
        operandsIndex++;
        addToDisplay(e.target.textContent);
    } else if (e.target.textContent==='CE') {
        operators = [];
        operands = [];  
        operandsIndex = 0;
        replaceDisplay('');
    } else {
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