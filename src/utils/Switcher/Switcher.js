import './Switcher.css'

function Switcher() {
  return (
      <label className='switch'>
        <input type='checkbox' />
        <span className='slider'></span>
      </label>
  );
}

export default Switcher