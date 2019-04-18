var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);


function searchCountries() {
  var countryName = document.getElementById('country-name').value;
  if(!countryName.length) countryName = 'Poland';
  fetch(url + countryName)
  .then(function(resp) {
    return resp.json();
  })
  .then(showCountriesList);
}

function showCountriesList(resp) {
  countriesList.innerHTML = '';
  resp.forEach(function(item) {
    var liEl = document.createElement('li');
    var liSec = document.createElement('li');
    var liThr = document.createElement('li');
    liEl.innerText = item.name + "'s capital is: "  + item.capital;
    liSec.innerText = "Currency in " + item.name + " is: "  + item.currencies;
    liThr.innerText = "Language(s) in " + item.name + " is: "  + item.languages;
    countriesList.appendChild(liEl);
    countriesList.appendChild(liSec);
    countriesList.appendChild(liThr);
  });
}