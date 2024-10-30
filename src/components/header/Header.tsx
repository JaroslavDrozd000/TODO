import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <input type='text' placeholder='Search todo' />
      <button>Add todo</button>
    </div>
  );
};

export default Header;
