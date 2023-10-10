// Wiederholung JS Data Types, variables und constants

// DATA TYPES

// source Primitive vs non-primitive => https://youtu.be/9ooYYRLdg_g?si=icQHtj8CHj1-9R5g

// Primitive Data
const string = "string";
let number = 1;
number = 4;
let boolean = true // true or false only
let nichtDefiniert = undefined;
let nullWert = null;

// Non-Primitives
    const array = [];
    
    const user1 = {
        // KEY : VALUE pair
        name: "Peter",
        age: 44,
        adresse: {
            street: "lindenstr.",
            zipcode: 85444,
            city: "munich"
        },
        food: ["pizza", "pasta", "hühnchen"],
        married: true
    } 

    const user2 ={
        // KEY : VALUE pair
        name: "Marwa",
        age: 24,
        adresse: {
            street: "lindenstr.",
            zipcode: 85444,
            city: "munich"
        },
        food: ["pizza", "pasta", "hühnchen"],
        married: true
    }

const userGroup = [user1, user2]
console.log("usergroup", userGroup)
// VARIABLE vs CONSTANT

