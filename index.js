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
        console.log(`Name : ${item.login}URL Profile : ${item.html_url}`);
        document.getElementById("people").innerHTML += `
         
          <div class="card" style:"width: 200px; margin: 10px;">
            <img src=${item.avatar_url} />
            <div class="card-body">
              <h5 class="card-title">${item.login}</h5>
              <p class="card-text"></p>
              <a href="${
                item.organizations_url
              }" class="card-link">Organization Link</a>
              <a href="${
                item.html_url
              }" class="btn btn-primary">Go to Profile</a>
              
            </div>
          </div>`;
      });
    });
};
getDataPeople();
