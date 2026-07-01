const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const divide = document.getElementById("/");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const multiply = document.getElementById("*");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const minus = document.getElementById("-");
const add = document.getElementById("+");
const equals = document.getElementById("=");
let input = document.getElementById("input");
const ac = document.getElementById("ac");
const zero = document.getElementById("0");

seven.onclick = () => {
    input.value += 7
    console.log(input.value)
}
eight.onclick = () => {
    input.value += 8
    console.log(input.value)
}
nine.onclick = () => {
    input.value += 9
    console.log(input.value)
}
divide.onclick = () => {
    input.value += "/"
    console.log(input.value)
}
four.onclick = () => {
    input.value += 4
    console.log(input.value)
}
five.onclick = () => {
    input.value += 5
    console.log(input.value)
}
six.onclick = () => {
    input.value += 6
    console.log(input.value)
}
multiply.onclick = () => {
    input.value += "*"
    console.log(input.value)
}
one.onclick = () => {
    input.value += 1
    console.log(input.value)
}
two.onclick = () => {
    input.value += 2
    console.log(input.value)
}
three.onclick = () => {
    input.value += 3
    console.log(input.value)
}
minus.onclick = () => {
    input.value += "-"
    console.log(input.value)
}
zero.onclick = () => {
    input.value += 0
    console.log(input.value)
}
add.onclick = () => {
    input.value += "+"
    console.log(input.value)
}
equals.onclick = () => {
    total = eval(input.value)
   
    console.log(total)
    input.value = total
  
}
ac.onclick = () => {
    input.value = ""
}

