const API_URL = "https://swapi.tech/api";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id, callback) {
  const url = `${API_URL}/${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, function (data) {
    console.log(`Hi, my name is ${data.result.properties.name}`);
    if (callback) {
      callback();
    }
  });
}

getCharacter(1, function () {
  getCharacter(2, function () {
    getCharacter(3, function () {
      getCharacter(4, function () {
        getCharacter(5, function () {
          getCharacter(6, function () {
            getCharacter(7);
          });
        });
      });
    });
  });
});
