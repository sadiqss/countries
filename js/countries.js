const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    console.log(countriesHTML[0])
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}
/* const getCountryHTML = country => {
    //option 1 destructuring
    const { name, flags } = country;

    return `
    <div class='country'>
    <h2>${name}</h2>
    <img src="${flags.png}">
    </div>
    `
} */
//original
/* const getCountryHTML = country => {
    return `
    <div class='country'>
    <h2>${country.name}</h2>
    <img src="${country.flags.png}">
    </div>
    `
} */
// option 2
const getCountryHTML = ({ name, flags }) => {

    return `
    <div class='country'>
    <h2>${name}</h2>
    <img src="${flags.png}">
    </div>
    `
}
loadCountries();