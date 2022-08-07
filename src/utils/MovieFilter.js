function moviesFilter(movies, query, checkboxStatus) {
  let moviesFilter = movies;
  let result;
if (checkboxStatus) {
  moviesFilter = moviesFilter.filter((movie) => movie.duration <= 40);
}

result = moviesFilter.filter((movie) => {
  return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
})
  return result;
}

export default moviesFilter;