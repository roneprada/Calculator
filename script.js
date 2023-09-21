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
const clear = document.getElementById("clear");
const equal = document.getElementById("answer");


let math;

let boolean = false;

let numberOne;

let sign;

let numOne;

let numTwo;




//USED EVENT LISTENER TO GET EVERY NUMBER ID TO ASSIGN CONTENT IN THE DECLARED VARIABLE CALLED SIGN

document.addEventListener("click",(event)=>{
    let target = event.target
    let see = target.getAttribute("id");
    if(see === "add"){
        sign = '+'
        arrOne = []
    }else if(see === 'minus'){
        sign = '-'
    }else if(see === 'multiply'){
        sign = "*"
    }else if(see === 'divide'){
        sign = "/"
    }
})




//NUMBER 1

one.addEventListener("click",()=>{
    arrOne.push(1);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})




//NUMBER 2

two.addEventListener("click",()=>{
    arrOne.push(2);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})



//NUMBER 3

three.addEventListener("click",()=>{
    arrOne.push(3);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})



//NUMBER 4

four.addEventListener("click",()=>{
    arrOne.push(4);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    // console.log(newNumb);
    math = newNumb
})



//NUMBER 5

five.addEventListener("click",()=>{
    arrOne.push(5);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})



//NUMBER 6

six.addEventListener("click",()=>{
    arrOne.push(6);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})



//NUMBER 7

seven.addEventListener("click",()=>{
    arrOne.push(7);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})


//NUMBER 8

eight.addEventListener("click",()=>{
    arrOne.push(8);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})


//NUMER 9

nine.addEventListener("click",()=>{
    arrOne.push(9);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})


//NUMBER 0

zero.addEventListener("click",()=>{
    arrOne.push(0);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
    math = newNumb
})



//FOR ADDITION SIGN;

addition.addEventListener('click',()=>{
    textType.textContent = '';
    textType.textContent = '+';
    numberOne = Number(math)
    console.log( typeof numberOne);
localStorage.setItem("numberOne",numberOne);
  numOne = localStorage.getItem("numberOne");
})



//FOR SUBSTRACTION SIGN;

substract.addEventListener('click',()=>{
    textType.textContent = '';
    textType.textContent = '-';
    numberOne = Number(math)
    console.log( typeof numberOne);
localStorage.setItem("numberOne",numberOne);
  numOne = localStorage.getItem("numberOne");
  arrOne = [];
  console.log(arrOne)
  console.log(numOne)
  arrTwo.push()
  console.log(arrTwo)
})


//FOR MULTIPLICATION SIGN;

multiply.addEventListener('click',()=>{
    textType.textContent = '';
    textType.textContent = '*';
    numberOne = Number(math)
    console.log( typeof numberOne);
localStorage.setItem("numberOne",numberOne);
  numOne = localStorage.getItem("numberOne");
  arrOne = [];
  console.log(arrOne)
  console.log(numOne)
  arrTwo.push()
  console.log(arrTwo)
})


//FOR DIVISION SIGN;

divide.addEventListener('click',()=>{
    textType.textContent = '';
    textType.textContent = '/';
    numberOne = Number(math)
    console.log( typeof numberOne);
localStorage.setItem("numberOne",numberOne);
  numOne = localStorage.getItem("numberOne");
  arrOne = [];
  console.log(arrOne)
  console.log(numOne)
  arrTwo.push()
  console.log(arrTwo)
})





// GET RESULT FOR PROBLEM

equal.addEventListener("click",()=>{

    numTwo = Number(math);

    if(sign === '+'){
        let result = numberOne + numTwo;
        textType.textContent = result;
        console.log(result)
    }else if(sign === "-"){
        let result = numberOne - numTwo;
        textType.textContent = result;
    }else if(sign === "*"){
        let result = numberOne * numTwo;    
        textType.textContent = result;
    }else if(sign ===  '/'){
        let result = numberOne / numTwo;    
        textType.textContent = result;
    }else if((sign === '/') && (numOne < numTwo)){
        let result = numberOne / numTwo;    
        textType.textContent = result.toFixed(2);
    }


})


let arrOne = [];
let arrTwo = [];

const empty = ()=>{
    arrOne = [];
    arrTwo = [];
    textType.textContent = 0;
}
clear.addEventListener('click',empty)

console.log(arrOne)

