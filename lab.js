console.log("HI!");

// Take the output from your getCountryByName() function and make use of it on the webpage.

// creating a function for get country by name
// the fetch method returns a promise

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    
    // using the json method to convert response into JSON data
    .then(response => response.json())

    // the JSON data still needs to be processed. so adding another then() statement with a function that has an argument called data
    .then(data => {
        let country = data[0];
        let section = document.getElementById("countries");
        let name = document.createElement("h3");
        // using .common to access the common property of name on the country object
        name.innerHTML = `Country name: ${country.name.common}`;
        // connecting DOM elements with appendchild
        section.appendChild(name);

        let population = document.createElement("h3");
        population.innerHTML = `Population: ${country.population}`
        section.appendChild(population);
    })
    
    .catch(function(error) {
        console.log(error);
    });
}

getCountryByName("United Kingdom");

// create a function to get ALL countries

const getAllCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(data => {
        let section = document.getElementById("all_countries");
        // display name and population for each country
        data.forEach(country => {
            let name = document.createElement("h3");
            name.innerHTML = `Country name: ${country.name.common}`;
            section.appendChild(name);

            let population = document.createElement("h3");
            population.innerHTML = `Population: ${country.population}`
            section.appendChild(population);

        });
    });
}

document.addEventListener("DOMContentLoaded", getAllCountries);

// add an event listener to the form
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let countryName = document.querySelector("#country_name").value;
    getCountryByName(countryName);
});
