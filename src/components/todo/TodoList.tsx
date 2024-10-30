import { ITodoList } from '../../utils/interfaces/interface';
import TodoItem from './TodoItem';
import './todoList.css';

interface ITodoListParams extends ITodoList {}

const TodoList = ({ heading, buttonLabel, todos }: ITodoListParams) => {
  return (
    <div className='todo-list-container'>
      <h1 className='todo-list-heading'>{heading}</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.title} {...{ ...todo, buttonLabel }} />
      ))}
    </div>
  );
};

export default TodoList;
