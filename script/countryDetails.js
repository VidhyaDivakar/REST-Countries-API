
const singleURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");

const counFlag = document.getElementById("flag");
const counName = document.getElementById("countryName");
const counNativeName = document.getElementById("nativeName");
const counPpopulation = document.getElementById("population");
const counRegion = document.getElementById("region");
const counSubregion = document.getElementById("subregion");
const counCapital = document.getElementById("capital");
const counTld = document.getElementById("tld");
const councurrencies = document.getElementById("currencies");
const counLanguages = document.getElementById("languages");
const counBorders = document.getElementById("borders");
const counBackBtn = document.querySelector(".backButton");


counBackBtn.addEventListener("click", () => {
  window.history.back();
});

async function fetchCountryDetails() {
    try {
        const response = await fetch(singleURL);

        if(!response.ok) 
        {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        const country = data[0];

        renderCountry(country);
            } catch (error) {
                console.error("Error fetching country details:", error);
            }
    }
}