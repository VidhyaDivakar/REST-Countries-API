
const singleURL = "https://restcountries.com/v3.1/name/{name}?fullText=true";

const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");