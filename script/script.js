
const grid = document.querySelector(".countries-grid");

const apiURL = "https://restcountries.com/v3.1/all?fields=common,population,region,capital,flags"; // storing the API endpoint as a const variable



export async function fetchAllCountries() {
     try {
        const response = await fetch(apiURL);
        if(!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
    const countries = await response.json();
console.log(countries);
grid.innerHTML = "";
countries.forEach(country => {
    createCountryCard(country);
    
});
} catch (error) {
    console.error("Error fetching countries: ", error);
}
}
function createCountryCard(country) {
   const name= country.name.common;
   const population = country.population;
   const region = country.region;
   const capital = country.capital ? country.capital[0] : "N/A";
   const flag = country.flags.png;

   const card = document.createElement("div");
   card.classList.add("country-card");


   const flagDiv = document.createElement("div");
   flagDiv.classList.add("flag");

   const flagImg = document.createElement("flagImg");
   img.src = flag;
   img.alt = `${name} flag`;

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
    cardCapital.innerHTML = `<strong>Captial:</capital> ${capital}`

    info.appendChild(cardTitle);
    info.appendChild(cardPopulation);
    info.appendChild(cardRegion);
    info.appendChild(cardCapital);

    card.appendChild(flagDiv);
    card.appendChild(info);

    grid.appendChild(card);

}
fetchAllCountries();
