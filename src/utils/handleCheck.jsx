export const handleChecker = (
  isChecked,
  setIsChecked,
  id,
  title,
  text,
  image,
  movieList,
  setMovieList,
  user,
) => {
  var updatedList = [...isChecked];
  const movie = { id: id, title: title, text: text, image: image };

  if (isChecked.includes(id)) {
    updatedList = updatedList.filter((movie) => movie !== id);
    setMovieList(movieList.filter((movie) => movie.id !== id));
  } else {
    updatedList.push(id);
    setMovieList([...movieList, movie]);
  }

  setIsChecked(updatedList);
  localStorage.setItem(`${user}-array`, JSON.stringify(movieList));
};
