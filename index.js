fetch(`https://restcountries.com/v3.1/all`)
.then(res => res.json())
.then(data => loadData(data));


let loadData = (object) => {
    for(let country of object){
        let countryName = country.altSpellings[1];
        let population = country.population;
        let flag = country.flags.png;

        let cName = document.createElement('h1');
        cName.setAttribute("style", "margin: 10px 0;")
        cName.innerHTML = countryName;

        let popul = document.createElement('h2');
        popul.setAttribute("style", "margin: 10px 0;")
        popul.innerHTML = population;

        let flags = document.createElement('img');
        flags.setAttribute("src", flag);
        flags.setAttribute("width", 50);


        let container = document.createElement("div");
        container.setAttribute("style", "margin: 50px 0;")
        container.appendChild(cName);
        container.appendChild(popul);
        container.appendChild(flags);

        let mainContainer = document.querySelector("#container");
        mainContainer.appendChild(container);
    }
}