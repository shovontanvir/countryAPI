let displayCountry = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => loadData(data));
    let btn = document.querySelector("#btn");
    btn.remove();
}
 
var i = 0;

let loadData = (object) => {
    for(let country of object){
        let countryName = country.altSpellings[1];
        let population = country.population;
        let flag = country.flags.png;

        let cName = document.createElement('h3');
        cName.setAttribute("style", "margin: 10px 0;")
        cName.innerHTML = countryName;

        let popul = document.createElement('h4');
        popul.setAttribute("style", "margin: 10px 0;")
        popul.innerHTML = population;

        let flags = document.createElement('img');
        flags.setAttribute("src", flag);
        flags.setAttribute("width", 100);


        let container = document.createElement("div");
        container.setAttribute("style", "margin: 15px; padding: 15px; text-align: center; background-color: cyan; border-radius: 15px; border: 4px solid darkcyan;");
        container.appendChild(cName);
        container.appendChild(popul);
        container.appendChild(flags);

        let mainContainer = document.querySelector("#container");
        mainContainer.setAttribute("style", " display: grid; grid-template-columns: auto auto auto auto; background-color: lightblue;");
        mainContainer.appendChild(container);
        i++;
    }
    console.log(i);
}