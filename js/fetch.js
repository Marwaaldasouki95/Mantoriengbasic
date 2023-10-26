
//fetch API - interface für daten anfrage...
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API


// Asychrone JS Beispiel
/* console.log("hallo");
console.log("Peter");
let data = "";

setTimeout(()=>{
    console.log("marwa")
    data = "marwa"
}, 2000);

console.log("nach der timeout");

setTimeout(()=>{
    console.log("data", data)
},3000)
 */








//daten von API holen mit FETCH() => GET REQUEST METHOD
const userList = document.getElementById("userlist");
const URL_API = 'https://randomuser.me/api/?results=10';
let generatedData;

//createUserFunction

function createUser(auto) {
    console.log("userItem", auto)

    //Benötigte Elemente erstellen
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const img = document.createElement("img");

    // Erstellte Elemente mit Inhalt füllen
    const name = `${auto.name.first} ${auto.name.last}`;
    h3.innerText = name;
    p.innerText = auto.email;
    img.setAttribute("src", auto.picture.medium);

    //Verbinden der erstellten Elemente => user Element
    div.append(h3, img, p);

    //neues Element (<div>) an den Anker im DOM hängen
    userList.append(div);
}



fetch(URL_API)
    .then(response => { return response.json() })
    .then(data => {
        generatedData = data.results;

        generatedData.forEach((user) => {
            createUser(user); //übernimmt erstellen des users in der DOM

        })

    })



//POST REQUEST METHOD

const URL_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts'

const neuerArtikel = {
    title: "Mein neuer Post",
    body: "hier steht alles drin"
}

fetch(URL_PLACEHOLDER, {
    method: 'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify(neuerArtikel)
})
    .then(response => response.json())
    .then(postData => console.log(postData))



