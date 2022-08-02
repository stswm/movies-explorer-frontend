import './Switcher.css';

function Switcher({shotMovies,setShortMovies,onChange}) {
  function checkboxHandler() {
    setShortMovies(!shotMovies);
  }
  return (
    <label className='switch'>
      <input
        type='checkbox'
        onChange={onChange}
        checked={shotMovies && 'checked'}
      />
      <span className='slider'></span>
    </label>
  );
}

export default Switcher;
