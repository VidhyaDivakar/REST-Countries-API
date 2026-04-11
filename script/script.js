

const apiURL = "https://restcountries.com/v3.1/all?fields=name,capital,currencies"; // storing the API endpoint as a const variable

export async function fetchAllCountries() {
     try {
        const response = await fetch(apiURL);
        if(!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
    const countries = await response.json();
console.log(countries);
} catch (error) {
    console.error("Error fetching countries: ", error);
}
}
fetchAllCountries();
