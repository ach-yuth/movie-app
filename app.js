const movies = document.querySelector(".movie");

fetch(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=094b5130742d4fcc02f1fcaff43f7ba5"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    data.results.forEach((movie) => {
      const newEl = document.createElement("div");
      newEl.className = "singleMovie";
      newEl.innerHTML = `
      <img
      src='https://image.tmdb.org/t/p/original${movie.poster_path}'
    />
    <div class="title">
      <h3>${movie.title}</h3>
      <span>${movie.vote_average}</span>
    </div>
    <div class="overview">
      <h3>overview</h3>
      ${movie.overview}
    </div>
      `;
      movies.append(newEl);
    });
  });
//   https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc
