let current = ''
let previous = ''
let operation = undefined

let output = document.getElementById("output-text")

function clearAll() {
  current = ''
  previous = ''
  operation = undefined
  updateText(current)
}

function addNumber(number) {
  current = current.toString() + number.toString()
  updateText(current)
}

function addOperation(op) {
  if (current === '') return
  if (previous !== '') {
    calculate()
    }
  operation = op
  previous = current
  current = ''
  updateText(operation)
}

function calculate() {
  let result
  const previousOperand = parseFloat(previous)
  const currentOperand = parseFloat(current)
  if (isNaN(previousOperand) || isNaN(currentOperand)) return
  switch (operation) {
    case '/':
      result = previousOperand / currentOperand
      break
    case '*':
      result = previousOperand * currentOperand
      break
    case '+':
      result = previousOperand + currentOperand
      break
    case '-':
      result = previousOperand - currentOperand
      break
    default:
      return
  }
  current = result
  operation = undefined
  previous = ''
  updateText(current)
}

function updateText(text) {
  const stringOutput = text.toString()
  output.value = stringOutput
}
