console.log("JS Loaded");

let allCountries = [];
const searchInput = document.querySelector(".searchBox input");
const regionFilter = document.getElementById("region");

const apiURL = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"; // storing the API endpoint as a const variable

const grid = document.querySelector(".countries-grid");
async function fetchAllCountries() {
    try {
        console.log("Fetching data:");
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const countries = await response.json();
        console.log("API data received:", countries);
        allCountries = countries;

        function applyFilters() {
            const searchValue = searchInput.value.toLowerCase();
            const regionValue = regionFilter.value;

            let filtered = allCountries;

            if (searchValue) {
                filtered = filtered.filter(country =>
                    country.name.common.toLowerCase().includes(searchValue)
                );
            }
            if (regionValue) {
                filtered = filtered.filter(country =>
                    country.region === regionValue
                );
            }

            grid.innerHTML = "";
            filtered.forEach(country => {
                createCountryCard(country);
            });
            // const country = countries[0]; code for checking single country fetch
            // createCountryCard(country);
        }
        applyFilters();

        searchInput.addEventListener("input", applyFilters);
        regionFilter.addEventListener("change", applyFilters);

    } catch (error) {
        console.error("Error fetching countries: ", error);
    }
}
function createCountryCard(country) {
    const name = country.name.common;
    const population = country.population;
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "N/A";
    const flag = country.flags.png;

    const card = document.createElement("div");
    card.classList.add("country-card");


    const flagDiv = document.createElement("div");
    flagDiv.classList.add("flag");

    const flagImg = document.createElement("img");
    flagImg.src = flag;
    flagImg.alt = `${name} flag`;

    flagDiv.appendChild(flagImg);

    const info = document.createElement("div");
    info.classList.add("country-info");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = name;

    const cardPopulation = document.createElement("p");
    cardPopulation.innerHTML = `<strong>Population:</strong> ${population}`;

    const cardRegion = document.createElement("p");
    cardRegion.innerHTML = `<strong>Region:</strong> ${region}`;

    const cardCapital = document.createElement("p");
    cardCapital.innerHTML = `<strong>Capital:</capital> ${capital}`

    info.appendChild(cardTitle);
    info.appendChild(cardPopulation);
    info.appendChild(cardRegion);
    info.appendChild(cardCapital);

    card.appendChild(flagDiv);
    card.appendChild(info);



    card.addEventListener("click", () => {
        const name = country.name.common;
        //const code = country.cca3;
        console.log("CLICKED:", name);
        window.location.href = `/countryDetails.html?name=${encodeURIComponent(name)}`;
        // window.location.href = `countryDetails.html?code=${code}`;
        console.log("Clicked country:", country.name.common);
    });
    grid.appendChild(card);

}
fetchAllCountries();
console.log(grid);


//Testing the Full API

// const apiURL =
//   "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";

// console.log("JS loaded");

// async function fetchAllCountries() {
//   try {
//     console.log("Fetching data...");

//     const response = await fetch(apiURL);

//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }

//     const countries = await response.json();

//     // STEP 4 TEST: only check API response
//     console.log("API data received:", countries);

//     console.log("Total countries:", countries.length);

//   } catch (error) {
//     console.error("Error fetching countries:", error);
//   }
// }

// // run function
// fetchAllCountries();