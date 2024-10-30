import { useAppContext } from '../../hooks';
import './header.css';

const Header = () => {
  const { setTodoTitleSearch } = useAppContext();

  return (
    <div className='header-container'>
      <input
        className='header-input'
        type='text'
        placeholder='Search todo'
        onChange={(e) => setTodoTitleSearch(e.target.value)}
      />
      <button className='header-button'>Add todo</button>
    </div>
  );
};

export default Header;
