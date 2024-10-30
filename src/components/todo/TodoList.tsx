import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks';
import { ITodoItem, ITodoList } from '../../utils/interfaces/interface';
import TodoItem from './TodoItem';
import './todoList.css';

interface ITodoListParams extends ITodoList {}

const TodoList = ({ heading, buttonLabel, todos }: ITodoListParams) => {
  const { todoTitleSearch } = useAppContext();

  const [tempTodos, setTempTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    setTempTodos(
      todos.filter((todo) =>
        todo.title
          .toLocaleLowerCase()
          .includes(todoTitleSearch.toLocaleLowerCase())
      )
    );
  }, [todoTitleSearch]);

  return (
    <div className='todo-list-container'>
      <h1 className='todo-list-heading'>{heading}</h1>
      {tempTodos.map((todo) => (
        <TodoItem key={todo.title} {...{ ...todo, buttonLabel }} />
      ))}
    </div>
  );
};

export default TodoList;
