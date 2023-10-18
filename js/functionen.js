/** declaration function */

// Arrow Function - ES6
// CLEAN CODE PRINIP - jede Funktion soll nur eine einzige aufgabe erfüllen!
//name function

console.log("peter ohne function")

const printName = (name) => {

    let myName = name;

    return `Mein Name ist ${myName}` // template string
}

const yourNameIs = printName("Peter")
console.log("your name is", yourNameIs)

//anonymous function

const anonymous = function () {

    console.log("anonyous function")

}


function runFunctions() {

    printName("Peter");
    anonymous()
}

runFunctions()


function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result
}

const myResult = addTwoNumbers(2,4)
console.log(myResult)

function multiplyBy4(number) {
    let result = number * 4;
    return result
}

function devideByTwo(number) {
    console.log(number)
    let result = number / 2;
    return result
}


function allFunctions (number, number2){

    const result1 = addTwoNumbers(number, number2);
    
    const result2 =  multiplyBy4(result1);
    
    const res = devideByTwo(result2);
    return res

}

const finalResult = allFunctions(10, 20)
console.log(finalResult)


// next time CLASSES // daten fetch
