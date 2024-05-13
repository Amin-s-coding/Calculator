
const getNumbers = [...document.querySelectorAll('.number')];
const operators =  [...document.querySelectorAll('.operators-btn')];
const clear = document.querySelector('.clear-btn');
const secondScreen = document.querySelector('.second-screen');
const screen = document.querySelector('#screen');
const equal = document.querySelector('.equal');
const historyBtn = document.querySelector('.history-btn');
const colosBtn = document.querySelector('.close-panel-btn');
const historyPanel = document.querySelector('.history-panel');
const historyItemContainer = document.querySelector('.history-item-container');

getNumbers.map(e=>{
    e.addEventListener('click', ()=>{
        screen.value += e.textContent;
    });
});

operators.map(e=>{
    e.addEventListener('click', ()=>{
        screen.value += e.textContent;
    })
})

// equal
function total() {
  const result = eval(screen.value);
  secondScreen.textContent = result;
  const historyItem = document.createElement('div');
historyItem.setAttribute('class', 'history-item');
historyItemContainer.appendChild(historyItem);
historyItem.textContent = `${screen.value} = ${result}`;
const deleteBtn = document.createElement('button');
deleteBtn.setAttribute('class', 'delete-item');
const deleteIcon = document.createElement('span');
deleteIcon.setAttribute('class', 'fa fa-trash-can');
deleteBtn.appendChild(deleteIcon);
historyItem.appendChild(deleteBtn)
deleteBtn.addEventListener('click',()=>{
  historyItemContainer.removeChild(historyItem);
})
};

// window.addEventListener('DOMContentLoaded', loadItem);

historyBtn.addEventListener('click', ()=>{
  historyPanel.style.display = 'block';
});
colosBtn.addEventListener('click', ()=>{
  historyPanel.style.display = 'none';
})

equal.addEventListener('click', total);



clear.addEventListener('click', ()=>{
  screen.value = "";
    secondScreen.textContent = "";
})



// Function to set input filter
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value
          if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          // Rejected value: restore the previous one
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          // Rejected value: nothing to restore
          this.value = "";
        }
      });
    });
  }
  
  // Use the setInputFilter function to install an input filter
  setInputFilter(document.getElementById("screen"), function(value) {
    return /^-?\d*[.,]?\d*([+\-*/]\d*[.,]?\d*)*$/.test(value); // Allow digits and operators only, using a RegExp
  }, "لطفا عددی را وارد نمایید");
  

