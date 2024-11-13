const screen = document.getElementById('screen');
function appendToScreen(value) {
    
    if (screen.value.length === 0 && isNaN(value)) {
        return; 
    }
    
    if (isOperator(value) && isOperator(screen.value.slice(-1))) {
        return; 
    }

    screen.value += value;
}
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
function clearScreen() {
    screen.value = '';
}
function calculate() {
    try {
        let result = eval(screen.value);
        // Handle division by zero or invalid expression
        if (!isFinite(result)) {
            screen.value = "Error";
        } else {
            screen.value = result;
        }
    } catch (error) {
        screen.value = 'Error';
    }
}