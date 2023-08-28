// Bling 
function bling() {
    let icon = document.querySelector("#bling");
    icon.style.display = "block";
    let clickSound = document.querySelector("#clickSound");
    clickSound.play();
        setTimeout(function() {
        icon.style.display = "none";
    }, 300);
}

let display = document.getElementById("display");
let formula = "";

// Add click event listener to buttons
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let buttonName = this.getAttribute("name");

        if (buttonName === "=") {
            calculate();
        } else {
            formula += buttonName;
            display.textContent = formula;
        }
    });
});

function calculate() {
    // Split the formula into numbers and operators
    let numbers = formula.split(/[\+\-\x\÷\^]/);
    let operators = formula.match(/[\+\-\x\÷\^]/g);

    // Initialize the result with the first number
    let result = parseInt(numbers[0]);

    // Perform calculations based on operators and numbers
    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let number = parseInt(numbers[i + 1]);
    
        if (operator === "+") {
            result += number;
        } else if (operator === "-") {
            result -= number;
        } else if (operator === "x") {
            result *= number;
        } else if (operator === "÷") {
            result /= number;
        } else if (operator === "^") {
            result **= number;
        } else { result = ""}
    }
    display.textContent = result;
    formula = "";
}
function resetFormulaAndDisplay() {
    formula = "";
    document.getElementById("display").textContent = "0";
}
