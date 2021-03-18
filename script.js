// Create variables for the 'first operand', 'second operand', and the operation
  let firstOperand, secondOperand, operation;
// Create a variable and select the 'txt-input-display' element
let txtInput = document.querySelector('#txt-input-display');
// Create a variable and select all of the 'btn-numbers' elements
let allBtns = document.querySelectorAll('.btn-numbers');
// Create a variable and select the 'btn-add' element   // alvin
let btnAdd = document.querySelector('#btn-add');

// Create a variable and select the 'btn-subtract' element
  let btnSubtract = document.querySelector('#btn-subtract');
// Create a variable and select the 'btn-multiply' element
  let btnMultiply = document.querySelector('#btn-multiply');
// Create a variable and select the 'btn-divide' element
  let btnDivide = document.querySelector('#btn-divide');
// Create a variable and select the 'btn-equal' element /alex
  let btnEqual = document.querySelector('btn-equal');


// Create a variable and select the 'btn-decimal' element // 
  let btnDecimal = document.querySelector('#btn-decimal')
// Create a variable and select the 'btn-clear-all' element // 
  let btnClearAll = document.querySelector('#btn-clear-all')
// Create a variable and select the 'btn-backspace' element // Booker
  let btnBackspace = document.querySelector('#btn-backspace')


// Add an 'click' event listener to all of the 'btn-numbers' by traversing them by 'forEach' statement
// the 'onclick' event should retrieve 'textContent' property of the current button
// and append it to the current value of 'txt-input-display'
  allBtns.forEach( btn => {
   console.log(btn.textContent);
});


// Create a 'click' event to add the two operands and display the result

// Create a 'click' event to subtract the two operands and display the result

// Create a 'click' event to multiply the two operands and display the result

// Create a 'click' event to divide the two operands and display the result

// Create a 'click' event to clear the input display

// Create a 'click' event to delete the last number from the operand

// Create a 'click' event to append a decimal character to the operand

// css is optional
