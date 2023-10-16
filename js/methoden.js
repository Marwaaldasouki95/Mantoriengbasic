/**methoden in javascript */

/**Methoden auf data type NUMBER */
const number4 = 4;
const numberToString = number4.toString();

/**method on data type STRING */

const myString = " Hallo ";

const includesH = myString.includes("all"); //return value boolean true oder false
console.log("includes",includesH)

const indexOf = myString.charAt(2) //suche buchstabe an spezieller index stelle
console.log("index of", indexOf)

const lengthValue = myString.length;
console.log("length", lengthValue)


const my2String = "World"

const newString = myString.concat(my2String);
console.log("neuer String", newString)

const trimmed = myString.trim()// entfernt whitespaces vor und nach dem wort
console.log("trimmed",trimmed)

console.log(myString.length === "Hallo")
console.log(myString)
console.log("Hallo")


/** methoden auf daten type ARRAY */

const shoppingList = ["Bananen", "Kirschen", "Äpfel"]
console.log("shoppinglist", shoppingList)

const appleIncluded = shoppingList.includes("Äpfel")
console.log(appleIncluded)

shoppingList.push("Orangen", "Birnen", {name: "Peter"})
console.log(shoppingList)

console.log(shoppingList[1])
shoppingList.splice(0, 3) //start bei index 0 - und davon die nächten 3 einträge
console.log(shoppingList)


shoppingList.forEach((item)=>{
//callback function

    console.log("item", item)

})

const birnenIncluded = shoppingList.includes("Birnen")
console.log(birnenIncluded)

const arrayOhneBirnen = shoppingList.filter((item)=> item === "Birnen" )
console.log("ohne birnen",arrayOhneBirnen)



/** der unterschied zw. methode und function */

number.toString() // toString eine function, die nur auf der number geht.

// function hat noch keine spezifische zuweisung

toString() // kann ich nicht eigenständig aufrufen - braucht immer den datentypen vorweg!


