/*jshint esversion: 6 */
const endpoint="https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";

const allCities=[];

/* Fetch returns a promise 
   The json() method takes a Response stream and returns a promise that resolves with the result of parsing the body text as JSON.
   the pro.json() method again returns a promise
   if we directly push to cities it will be an array of array,hence we use ... spread operator
*/
fetch(endpoint)
    .then(rawdata => rawdata.json())
    .then(data => {
        // console.log('data:', data);
        allCities.push(...data);
        // console.log('allCities', allCities);
    })
    .catch(err => console.log("Error occured :"+err));

/* 'gi' means globally and case Insensative 
   Test with findCities("mo",allCities); to list all cities that contain mo
*/
function findCities(whatToFind,allCities) {
    return allCities.filter(place => {
        const regex = new RegExp(whatToFind, 'gi');
        return place.name.match(regex) || place.state.match(regex);
    });
}

/* content will be an array and its element will be seperated by ,
   to convert it into a long string we use .join()
*/
function displayCities() {
    // console.log('value', this.value);
    const matchingCities = findCities(this.value, allCities);
    console.log('matchingCities', matchingCities);
    const content = matchingCities.map((place) => {
        return (` <li class="a"> ${place.name} in ${place.state} </li> `);
    }).join('');
    citylistEl.innerHTML = content;
}


const searchEl = document.querySelector('.searchbox');
const citylistEl = document.querySelector('.citylist');

searchEl.addEventListener('change',displayCities);
searchEl.addEventListener('keyup',displayCities);