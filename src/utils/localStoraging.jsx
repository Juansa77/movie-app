const localStoraging = (inputRef) => {
  const isChecked = inputRef.current.checked;
  inputRef.current.checked = !isChecked;
  if (!isChecked) {
    console.log('checkbox marcado');
  } else {
    console.log('checkbox sin marcar');
  }
};

export default localStoraging;
