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
  let btnEqual = document.querySelector('#btn-equal');


// Create a variable and select the 'btn-decimal' element // 
  let btnDecimal = document.querySelector('#btn-decimal')
// Create a variable and select the 'btn-clear-all' element // 
  let btnClearAll = document.querySelector('#btn-clear-all')
// Create a variable and select the 'btn-backspace' element // Booker
  let btnBackspace = document.querySelector('#btn-backspace')


// Add an 'click' event listener to all of the 'btn-numbers' by traversing them by 'forEach' statement

  allBtns.forEach( btn => {
   // console.log(btn.textContent);
    // the 'onclick' event should retrieve 'textContent' property of the current button
    // and append it to the current value of 'txt-input-display'
    btn.addEventListener('click', (e) => {
        let value = txtInput.value;
        txtInput.value += btn.textContent;  
   }) 
});



// Create a 'click' event to add the two operands and display the result  
   btnAdd.addEventListener('click', () => {
      let value = txtInput.value;
      if(!txtInput.value.includes("+")){
          txtInput.value += "+";
    }
})
// Create a 'click' event to subtract the two operands and display the result
    btnSubtract.addEventListener('click', () => {
      let value = txtInput.value;
      if(!txtInput.value.includes("-")){
          txtInput.value += "-";
    }
})
// Create a 'click' event to multiply the two operands and display the result
      btnMultiply.addEventListener('click', () => {
        let value = txtInput.value;
        if(!txtInput.value.includes("*")){
            txtInput.value += "*";
    }
})
// Create a 'click' event to divide the two operands and display the result
   btnDivide.addEventListener('click', () => {
      let value = txtInput.value;
      if(!txtInput.value.includes("/")){
          txtInput.value += "/";
      }
})
// Create a 'click' event to clear the input display
  btnClearAll.addEventListener('click', (e) => {
    txtInput.value = null;
     
})

// equal sign
  btnEqual.addEventListener('click', () => {
    let result = eval(txtInput.value);
    txtInput.value = result;
})

// Create a 'click' event to delete the last number from the operand
btnBackspace.addEventListener('click', (e) => {
    //let value = txtInput.value;
    txtInput.value = txtInput.value.toString().slice(0, -1)
     
}) 
// Create a 'click' event to append a decimal character to the operand
  btnDecimal .addEventListener('click', () => {
      let value = txtInput.value;
      // if(!txtInput.value.includes(".")){
          txtInput.value += ".";
      // }
})


// css is optional
