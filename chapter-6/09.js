const API_URL = "https://swapi.tech/api";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

// using promises

function getCharacterPromise(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}/${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

getCharacterPromise(1)
  .then(function (data) {
    console.log(`Hi, my name is ${data.result.properties.name}`);
    return getCharacterPromise(2);
  })
  .then(function (data) {
    console.log(`Hi, my name is ${data.result.properties.name}`);
    return getCharacterPromise(3);
  })
  .then(function (data) {
    console.log(`Hi, my name is ${data.result.properties.name}`);
  })
  .catch(function (id) {
    console.log(`An error occurred. We could not get the character ${id}`);
  });
