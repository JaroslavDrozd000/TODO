import { ITodoItem } from '../../utils/interfaces/interface';
import './todoItem.css';

interface ITodoItemParams extends ITodoItem {
  buttonLabel: string;
}

const TodoItem = ({ buttonLabel, title, priority, label }: ITodoItemParams) => {
  return (
    <div className='todo-item-container'>
      <div className=''>{title}</div>
      <div>{priority}</div>
      <div>{label}</div>
      <button>{buttonLabel}</button>
    </div>
  );
};

export default TodoItem;
