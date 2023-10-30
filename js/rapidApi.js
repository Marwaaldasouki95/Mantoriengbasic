//fetch car data from rapid API
const carListAnker = document.getElementById("listCars");
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f447fd4cc9mshdb6d578573cd6adp1c8961jsn91b1d1554b8a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};


async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        // array mit 5 autos...

        result.forEach((car)=>{
            
            //elemente erstellen...
            const div = document.createElement("div");
            const brandHeading = document.createElement("h2")
            const modelP = document.createElement("p");
            const klasseP = document.createElement("p");

            //element befüllen...
            brandHeading.innerText = car.make.toUpperCase();
            modelP.innerText = car.model;
            klasseP.innerText = car.class;

            //element zusammenbauen...
            div.append(brandHeading, modelP, klasseP);

            //neues Auto in DOM hinzufügen
            carListAnker.append(div)
            

        })

    } catch (error) {
        console.error(error);
    }

}
getData();
