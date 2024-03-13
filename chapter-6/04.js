const API_URL = "https://swapi.tech/api";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

const lukeUrl = `${API_URL}/${PEOPLE_URL.replace(":id", 1)}`;

$.get(lukeUrl, opts, function (luke) {
  console.log(luke);
  console.log(`Hi, my name is ${luke.result.properties.name}`);
});
