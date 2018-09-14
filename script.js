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
        console.log('data:', data);
        allCities.push(...data);
        console.log('allCities', allCities);
    })
    .catch(err => console.log("Error occured :"+err));

/* 'gi' means globally and case Insensative 
   Test with findCities("mo",allCities); to list all cities that contain mo
*/
function findCities(whatToFind,allCities) {
    return allCities.filter(place => {
        const regex = new RegExp(whatToFind, 'gi');
        return place.name.match(regex);
    });
}
