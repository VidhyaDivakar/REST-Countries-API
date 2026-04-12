
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
   const populaton = country.populaton;
   const region = country.region;
   const captial = country.capital ? country.captial[0] : "N/A";
   const flag = country.flags.png;
}
fetchAllCountries();
