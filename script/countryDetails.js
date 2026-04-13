
const singleURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");

const counFlag = document.getElementById("flag");
const counName = document.getElementById("countryName");
const counNativeName = document.getElementById("nativeName");
const counPopulation = document.getElementById("population");
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

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        const country = data[0];

        renderCountry(country);
    } catch (error) {
        console.error("Error fetching country details:", error);
    }
}
// function to render country
function renderCountry(country) {
    counFlag.src = country.flags.png;
    counName.textContent = country.name.common;

    const NativeNames = country.name.counNativeName;
    if (NativeNames) {
        const firstNative = Object.values(NativeNames)[0].common;
        counNativeName.textContent = firstNative;
    } else {
        counNativeName.textContent = "N/A";
    }
    counPopulation.textContent = country.populationtoLocaleString();
    counRegion.textContent = country.counRegion;
    counSubregion.textContent = country.counSubregion || "N/A";
    counCapital.textContent = country.counCapital ? country.counCapital[0] : "N/A";

    counTld.textContent = country.counTld ? country.counTld.join(", ") : "N/A";

    if (country.councurrencies) {
        const currencies = Object.values(country.councurrencies)
            .map(c => c.name)
            .join(", ");
        councurrencies.textContent = currencies;
    } else {
        councurrencies.textContent = "N/A";
    }

    if (country.counLanguages) {
        const languages = Object.values(country.counLanguages).join(", ");
        counLanguages.textContent = languages;
    } else {
        counLanguages.textContent = "N/A";
    }

    renderBorders(country.counBorders);
}

async function renderBorders(counBorders) {
  counBordersContainer.innerHTML = "";
if (!counBorders || counBorders.lenght === 0) {
    counBordersContainer.textContent = "None";
    return;
}

try {
    const codes = counBorders.join(",");
    const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
    const data = await res.json();


 data.forEach(borderCountry => {
      const btn = document.createElement("button");
      btn.textContent = borderCountry.name.common;

      // click → navigate to that country
      btn.addEventListener("click", () => {
        window.location.href = `countryDetails.html?name=${borderCountry.name.common}`;
      });
      bordersContainer.appendChild(btn);
    });

  } catch (error) {
    console.error("Error fetching border countries:", error);
  }
}

// run
fetchCountryDetails();