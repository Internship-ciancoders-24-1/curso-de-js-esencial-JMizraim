const API_URL = "https://swapi.tech/api";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id) {
  const url = `${API_URL}/${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, function (data) {
    console.log(`Hi, my name is ${data.result.properties.name}`);
  });
}

getCharacter(1);
