
const numbers = [...document.querySelectorAll('.number')];
const operators = [...document.querySelectorAll('.operators-btn')];
const clear = document.querySelector('.operators-c');
const secondScreen = document.querySelector('.second-screen');
const screen = document.querySelector('#screen');
const operatorsScreen = document.querySelector('.operators-screen');
const equal = document.querySelector('.equal');
const historyBtn = document.querySelector('.history-btn');
const coloseBtn = document.querySelector('.close-panel-btn');
const HistoryPanel = document.querySelector('.history-panel'); 

numbers.forEach(element => {
    element.addEventListener('click', ()=>{
      screen.value + parseInt(element.textContent);
    })
});

operators.forEach(element => {
element.addEventListener('click', ()=>{
    operatorsScreen.textContent = element.textContent;
    if (screen.value.length = 0) {
        secondScreen.textContent = screen.value;
    } 
    else if (secondScreen.textContent = screen.value) {
        screen.value = '';
        window.onload = screen.focus();
        }
        else if (secondScreen.textContent.length = 1) {
            secondScreen.textContent = screen.value;
            }
    else{
        screen.placeholder = 'عددی را وارد کنید';
    }
})
});

const plusBtn = operators[0];
const minusBtn = operators[1];
const multiBtn = operators[2];
const divideBtn = operators[3];

function clickPlus(){
    equal.addEventListener('click',()=>{
        secondScreen.textContent=`${secondScreen.textContent}  + ${screen.value} = ${parseInt(screen.value) + parseInt(secondScreen.textContent)}`;
        secondScreen.classList.add('resault');
        if (secondScreen.textContent.length >= 15) {
            secondScreen.classList.add('resault-small')
        } 

    })
};

function clickminus(){
    equal.addEventListener('click',()=>{
        secondScreen.textContent=` ${secondScreen.textContent} -  ${screen.value} = ${parseInt(screen.value) - parseInt(secondScreen.textContent)}`;
        secondScreen.classList.add('resault')
        screen.value= '';
    })
};
function clickMulti(){
    equal.addEventListener('click',()=>{
        secondScreen.textContent=`${secondScreen.textContent} × ${screen.value} = ${parseInt(screen.value) * parseInt(secondScreen.textContent)}`;
        secondScreen.classList.add('resault')
        screen.value= '';
    })
};
function clickDivide(){
    equal.addEventListener('click',()=>{
        secondScreen.textContent=` ${secondScreen.textContent} / ${screen.value} = ${parseInt(screen.value) / parseInt(secondScreen.textContent)}`;
        secondScreen.classList.add('resault');
        screen.value= '';
    });
};

minusBtn.addEventListener('click', clickminus);
plusBtn.addEventListener('click', clickPlus);
multiBtn.addEventListener('click', clickMulti);
divideBtn.addEventListener('click', clickDivide);


numbers.forEach(e=>{
e.addEventListener('click',() => {
screen.value += parseInt(e.textContent);
})
});

    function clearScreen(){
      document.location.reload(true)
    }
    clear.addEventListener('click', clearScreen);

    
historyBtn.addEventListener('click', ()=>{
    HistoryPanel.classList.add('open-history')

});
console.log(HistoryPanel)
coloseBtn.addEventListener('click', ()=>{
  HistoryPanel.classList.remove('open-history')
})