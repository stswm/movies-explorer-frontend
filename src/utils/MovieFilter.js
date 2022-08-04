function moviesFilter(movies, query, checkboxStatus) {
  let moviesFilter = movies;
  let result;

  if (checkboxStatus) {
    moviesFilter = moviesFilter.filter((movie) => movie.duration <= 40);
    console.log("1",moviesFilter);
  }
  
  result = moviesFilter.filter((movie) => {
    return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
  console.log("2",moviesFilter);
  return result;
}

export default moviesFilter;