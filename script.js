textType = document.getElementById("input")

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const divide = document.getElementById("divide");
const multiply = document.getElementById('multiply');
const substract = document.getElementById("minus");
const addition = document.getElementById('add');
const clear = document.getElementById("ce");
const equal = document.getElementById("answer");

let math;

let boolean = false;

let numberOne;

let sign;

let numOne;

let numTwo;


document.addEventListener("click",(event)=>{
    let target = event.target
    let see = target.getAttribute("id");
    if(see === "add"){
        sign = '+'
        arrOne = []
    }else if(see === 'minus'){
        sign = '-'
    }else if(see === 'multiply'){
        sign = "x"
    }else if(see === 'divide'){
        sign = "/"
    }
})


one.addEventListener("click",()=>{
    arrOne.push(1);
    textType.textContent = arrOne.join('');
    // console.log(arrOne)
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})


two.addEventListener("click",(event)=>{
    let target = event.target;
    console.log(target)
    arrOne.push(2);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})

addition.addEventListener('click',()=>{
    textType.textContent = '';
    textType.textContent = '+';
    numberOne = Number(math)
    console.log( typeof numberOne);
localStorage.setItem("numberOne",numberOne);
  numOne = localStorage.getItem("numberOne");
// console.log(numOne)


})

// ADDITION IS WORKING ONLY FOR NUMBERS TWO AND ONE FINISH IT LATER MY FRIEND KEEP IT UP PIECE OUT;

equal.addEventListener("click",()=>{
    console.log(sign)
    console.log(numberOne)
    console.log(numOne);
    // console.log(typeof numOne);
    console.log(typeof math)
    numTwo = Number(math);
    console.log(numTwo)
    console.log(typeof numberOne)
    console.log(numberOne)
    if(sign === '+'){
        let result = numberOne + numTwo;
        textType.textContent = result;
        console.log(result)
    }


})


let arrOne = [];
let arrTwo = [];
console.log(arrOne)

