const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountryByName(searchQuery) {
    const url =`${BASE_URL}/${searchQuery}`;
    return fetch(url)
    .then(response => response.json());
}

export default { fetchCountryByName }