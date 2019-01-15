const getDataFilm = () => {
  fetch("https://swapi.co/api/films")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};
getDataFilm();

const getDataVehicle = () => {
  fetch("https://swapi.co/api/vehicles")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.results);
    });
};
getDataVehicle();

const getDataPeople = () => {
  fetch("https://api.github.com/users/rinahafizhah/followers")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const array = data.forEach(item => {
        console.log(`Name : ${item.login}`);
        document.getElementById("people").innerHTML = "My Followers";
      });
    });
};
getDataPeople();
