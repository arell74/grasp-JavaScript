//JQuery ajax
// $('.search-button').on('click', function() {

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=e18c5f67&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);

//             // ketika button detail di klik
//             $('.modal-movie-btn').on('click', function () {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=e18c5f67&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovies(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                             });
//                         });
//                     },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });

// });

// fetch
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=e18c5f67&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // ketika tombol detail di klik
      const modalDetailButton = document.querySelectorAll(
        ".modal-movie-btn"
      );
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          console.log(imdbid);
          fetch("http://www.omdbapi.com/?apikey=e18c5f67&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovies(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(m) {
  return `
            <div class="col-md-4 my-3">
                <div class="card">
                <img src="${m.Poster}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-movie-btn" data-bs-toggle="modal" data-bs-target="#movieButtonModal" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
                </div>
            </div>
            `;
}

function showMovies(m) {
  return `
                        <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${m.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item"><h4>${
                                      m.Title
                                    } (${
    m.Year
  })</h4> 🌟Rating : ${m.Ratings.map((r) => `${r.Value}`)}</li>
                                    <li class="list-group-item"><strong>Director : </strong> ${
                                      m.Director
                                    }</li>
                                    <li class="list-group-item"><strong>Actors : </strong> ${
                                      m.Actors
                                    }</li>
                                    <li class="list-group-item"><strong>Writer : </strong> ${
                                      m.Writer
                                    }</li>
                                    <li class="list-group-item"><strong>Plot : </strong> <br> ${
                                      m.Plot
                                    }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `;
}
