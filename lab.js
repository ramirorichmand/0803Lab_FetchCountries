console.log("HI!");

// creating a function to get country by name
// the fetch method returns a promise

// // Define a function called getCountryByName which takes a country name as input
const getCountryByName = (countryName) => {
    
    // Use the fetch() method to make a request to the REST Countries API to get data on the specified country
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)

        // using the JSON method to convert response into JSON data
        .then(response => response.json())

        // Access the first country object in the array returned by the API
        .then(data => {
            let country = data[0];
            
            // Use the DOM API to create HTML elements to display the country name and population on the webpage
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

        // Use the .catch() method to handle any errors that occur during the promise chain
        .catch(function (error) {
            console.log(error);
        });
}

getCountryByName("United Kingdom");

// define a function to get ALL countries
const getAllCountries = () => {
    
    // Use the fetch() method to make a request to the REST Countries API to get data on all countries
    fetch(`https://restcountries.com/v3.1/all`)
        
        // Use the .then() method to parse the response data as JSON
        .then(response => response.json())
        
        // Use a forEach loop to iterate over each country object in the array returned by the API
        .then(data => {
            let section = document.getElementById("all_countries");

            // display name and population for each country
            data.forEach(country => {
                
                // Use the DOM API to create HTML elements to display the country name and population on the webpage
                let name = document.createElement("h3");
                name.innerHTML = `Country name: ${country.name.common}`;
                
                // Append the HTML elements to a section on the webpage with the ID "all_countries"
                section.appendChild(name);

                let population = document.createElement("h3");
                population.innerHTML = `Population: ${country.population}`
                section.appendChild(population);

            });
        });
}

document.addEventListener("DOMContentLoaded", getAllCountries);

// Use the DOM API to get a reference to a form on the webpage
const form = document.querySelector("form");

// Add an event listener to the form which listens for a "submit" event
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Use the DOM API to get the value of the input field with ID "country_name"
    let countryName = document.querySelector("#country_name").value;
    
    // Call the getCountryByName function with the country name as input
    getCountryByName(countryName);
});
