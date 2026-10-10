let screen = document.getElementById('screen');
let currentInput = "";

function numberInput(val) {
  if (currentInput === "" && val !== '.') {
    currentInput = val;
    updateScreen();
    return;
  }
  
  if (val==='.') {
    let lastNumber = currentInput.split(/[\+\-\*\/]/).pop();
    if (lastNumber.includes('.')) {
      return;
    }
  }
  
  currentInput += val;
  updateScreen();
}

function operationInput(op) {
  if (currentInput === "") {
    currentInput = "0" + op;
    updateScreen();
    return;
  }
  let lastChar = currentInput.slice(-1);
  if (["+", "-", "*", "/"].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    
  updateScreen();
}

function clearScreen() {
  currentInput = "";
  screen.value = "0"
}

function count() {
  if (currentInput==="") {
    return;
  }
  try {
    let result = eval(currentInput)
    
    if (result % 1 !== 0) {
      result = parseFloat(result.toFixed(5)) 
    }
    
    screen.value = result;
    currentInput = result.toString();
  } catch (err) {
    screen.value = "Error!";
    currentInput = "";
  }
}

function delButton() {
  if (currentInput==="" || currentInput === "0") {
    return;
  }
  
  currentInput = currentInput.slice(0, -1);
  updateScreen();
}

function updateScreen() {
  screen.value = currentInput === "" ? "0" : currentInput;
}
