// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operator) {
    let result

    // COLLECT FIRST NUMBER FROM USER

    do {
        x = parseFloat(prompt(`Choose the first number`))

    } while (isNaN(x))



    // COLLECT SECOND NUMBER FROM USER

    do {
        y = parseFloat(prompt(`choose your second value`))
    } while (isNaN(y))

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

    do {
        operator = prompt(`Choose an operator: add, subtract, multiply or divide`).toLowerCase()
    } while (operator !== 'add' && operator !== 'subtract' && operator !== 'multiply' && operator !== 'divide')

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

    if (operator === 'add') {
        alert(result = x + y)
    } else if (operator === 'subtract') {
        alert(result = x - y)
    } else if (operator === 'multiply') {
        alert(result = x * y)
    } else if (operator === 'divide') {

        if (x === 0 && y === 0) {
            alert(`you cannot divide 0 by 0`)
        }
        else if (y === 0){
            alert(`Your answer is undefined`)

        } else {
        alert(result = x / y)}

    }
}



calculate()