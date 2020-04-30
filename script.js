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
    const numOperands = operands.map(str => Number(str));
    // console.log(numOperands);
    
    const ret = operators.reduce((reducedArray,operator,operatorIndex) => {
        if (operator==='\*') {
            const retNum = multiplyCalc(numOperands[operatorIndex],numOperands[operatorIndex+1]);
            reducedArray= reducedArray.concat(numOperands.slice(0,operatorIndex),retNum,numOperands.slice(operatorIndex+2));
            console.log(numOperands.slice(0,operatorIndex));
            console.log(numOperands.slice(operatorIndex+2));
            console.log(reducedArray);
        }
    return reducedArray;
    },[]);
    // console.log(ret);

    // if (operators==='\+') {
    //     return addCalc(a,b);
    // } else if (operators==='\-') {
    //     return subtractCalc(a,b);
    // } else if (operators==='\*') {
    //     return multiplyCalc(a,b);
    // } else {
    //     return divideCalc(a,b);
    // }
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