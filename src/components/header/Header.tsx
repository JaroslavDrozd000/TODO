import { useAppContext } from '../../hooks';
import './header.css';

const Header = () => {
  const { setTodoTitleSearch } = useAppContext();

  return (
    <div className='header-container'>
      <button className='header-button'>Add Task</button>
      <input
        className='header-input'
        type='text'
        placeholder='Search task'
        onChange={(e) => setTodoTitleSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
