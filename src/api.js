import axios from 'axios';

function maRequeteAxios(url) {
  axios.get(url)
      .then(function (response) {
          // Traitez la réponse ici
          console.log(response.data);
      })
      .catch(function (error) {
          // Traitez l'erreur ici
          console.log(error);
      });
}

export { maRequeteAxios };