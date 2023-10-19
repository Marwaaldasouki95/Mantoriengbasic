// Dom Manipulation

// AUSLESE von html elementen 
const h1Title = document.getElementById("title");

h1Title.innerHTML = "Peters dom";

//HTML Collection
const ul = document.getElementsByTagName("ul")
//console.log(ul)

for (let item of ul) {
    // in die children gehen und dann noch for/in
    const children = item.children;
    //console.log(children)
    for (let li of children) {

        //console.log(li.innerHTML)
    }


}

//Query Selector
const selector = document.querySelectorAll("h1")



// BAUEN von neuen Elementen
// 1. das Element erstellen
const div = document.createElement("div");
div.innerHTML = "hallo"
// 2. das Element, wohin das neue Element soll, nach JS bringen
const anker = document.getElementById("anker");

// 3. Anker hängt das neue div an...
anker.append(div)


// interaction von Frontend 
const addButton = document.getElementById("addButton");

function readId(event){
    alert(`das element hat die Id ${event.target.id}`)

}

const handleClick =()=>{
    let number = Math.floor(Math.random()*100)
    const newDiv = document.createElement("div");
    newDiv.innerHTML = number;
    newDiv.setAttribute("id", number);
    newDiv.addEventListener("click", readId)
    anker.append(newDiv);


}

addButton.addEventListener("click", handleClick)

//element kreieren
const newUl = document.createElement("ul");
const newLi = document.createElement("li");

newLi.innerText = "Birnen";
newUl.append(newLi)
anker.append(newUl)

// versuche die <li> dynamisch / automatisch zu erstellen
const meinListe = ["Birnen", "Äpfel", "Bananen"];

