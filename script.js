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

function testing(arrOne,arrTwo){
return arrOne + arrTwo;
}

one.addEventListener("click",()=>{
    arrOne.push(1);
    textType.textContent = arrOne;
    console.log(arrOne)
})

two.addEventListener("click",()=>{
    arrOne.push(2);
    textType.textContent = arrOne.join('');
    let newNumb = arrOne.join('');
    console.log(newNumb);
})



const arrOne = [];
const arrTwo = [];
console.log(arrOne)

const test = (type)=>{

}