function moviesFilter(movies, query, checkboxStatus) {
  let moviesFilter = movies;
  let result;
console.log("moviesFilter 1",moviesFilter);
if (checkboxStatus) {
  moviesFilter = moviesFilter.filter((movie) => movie.duration <= 40);
  console.log("moviesFilter 2",moviesFilter);
}

result = moviesFilter.filter((movie) => {
  return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
})
console.log("moviesFilter 3",moviesFilter);
  return result;
}

export default moviesFilter;