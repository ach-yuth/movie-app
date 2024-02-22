const movies = document.querySelector(".movie");
const form = document.querySelector("form");
const input = document.querySelector("input");

const api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=094b5130742d4fcc02f1fcaff43f7ba5";

const search_url =
  'https://api.themoviedb.org/3/search/movie?api_key=094b5130742d4fcc02f1fcaff43f7ba5&query="';

getMovies(api);
async function getMovies(url) {
  const resp = await fetch(url);
  const data = await resp.json();
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
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = input.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(search_url + searchTerm);
    input.value = "";
  } else {
    window.location.reload();
  }
});
