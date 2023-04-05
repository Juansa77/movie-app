export const handleChecker = (event, movie, user, movieList, setMovieList) => {
  const updatedList = [...movieList];
  if (event.target.checked) {
    const movieExists = updatedList.find((m) => m.id === movie.id);
    if (!movieExists) {
      updatedList.push(movie);
      setMovieList(updatedList);
      localStorage.setItem(`${user}-array`, JSON.stringify(updatedList));
    }
  } else {
    const index = updatedList.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      updatedList.splice(index, 1);
      setMovieList(updatedList);
      localStorage.setItem(`${user}-array`, JSON.stringify(updatedList));
    }
  }
};
