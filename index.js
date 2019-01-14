const getDataFilms = () => {
  fetch("https://swapi.co/api/films")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};

getDataFilms();

const getDataSwapi = () => {
  fetch("https://swapi.co/api/vehicles")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.results);
    });
};

getDataSwapi();
