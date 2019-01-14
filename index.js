fetch("https://swapi.co/api/films")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
