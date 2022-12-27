const firstNumber = document.querySelector('.firstNumber')
const secondNumber = document.querySelector('.secondNumber')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mult = document.querySelector('.mult')
const result = document.querySelector('.result')

function plusNumbers () {
    result.innerHTML = +firstNumber.value + +secondNumber.value
}

function minusNumbers () {
    result.innerHTML = +firstNumber.value - +secondNumber.value
}

function multNumbers () {
    result.innerHTML = +firstNumber.value * +secondNumber.value
}


plus.addEventListener('click', plusNumbers)
minus.addEventListener('click', minusNumbers)
mult.addEventListener('click', multNumbers)
