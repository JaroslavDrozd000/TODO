import { useMemo } from 'react';
import { useAppContext } from '../../hooks';
import { ITodoList } from '../../utils/interfaces/interface';
import TodoItem from './TodoItem';
import './todoList.css';

interface ITodoListParams extends ITodoList {}

const TodoList = ({ heading, buttonLabel, todos }: ITodoListParams) => {
  const { todoTitleSearch } = useAppContext();

  const tempTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.title
          .toLocaleLowerCase()
          .includes(todoTitleSearch.toLocaleLowerCase())
      ),
    [todoTitleSearch, todos]
  );

  return (
    <div className='todo-list-container'>
      <h1 className='todo-list-heading'>{heading}</h1>
      {tempTodos.map((todo) => (
        <TodoItem key={todo.id} {...{ ...todo, buttonLabel }} />
      ))}
    </div>
  );
};

export default TodoList;
