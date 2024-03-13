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

const parallelPromises = [1, 2, 3].map((id) => getCharacterPromise(id));

Promise.all(parallelPromises)
  .then((characters) => {
    console.log(characters);
  })
  .catch((id) => {
    console.log(`An error occurred. We could not get the character ${id}`);
  });
