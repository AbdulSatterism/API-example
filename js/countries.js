const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCuntries(data))
}

loadCountries();

const displayCuntries = (countries) => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    // return na lagle forEach jodio for loop r forEach pray akoi
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">details</button>
        `;
        countriesDiv.appendChild(div)

    });
}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetail(data[0]))

}

const countryDetail = (country) => {
    const condtryDiv = document.getElementById('details');
    condtryDiv.innerHTML = `
    <h5>${country.name.common}</h5>
    <p>Population: ${country.population}</p>
    <p>Area is :${country.area}</p>
    <img width='300px' src="${country.flags.png}">
    `
}