const API_URL = "https://swapi.tech/api";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id, callback) {
  const url = `${API_URL}/${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, callback).fail(() => {
    console.log(`An error occurred. We could not get the character ${id}`);
  });
}

getCharacter(1, function (r) {
  console.log(`Hi, my name is ${r.result.properties.name}`);
  getCharacter(2, function (r) {
    console.log(`Hi, my name is ${r.result.properties.name}`);
  });
});
