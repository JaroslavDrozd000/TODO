import { DragEvent, useMemo } from 'react';
import { useAppContext, useGetTodosDetail, useUpdateTodo } from '../../hooks';
import { ITodoItem, ITodoList } from '../../utils/interfaces/interface';
import TodoItem from './TodoItem';
import './todoList.css';

interface ITodoListParams extends ITodoList {}

const TodoList = ({ heading, buttonLabel, todos }: ITodoListParams) => {
  const { todoTitleSearch, setReload, reload } = useAppContext();

  const tempTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.title
          .toLocaleLowerCase()
          .includes(todoTitleSearch.toLocaleLowerCase())
      ),
    [todoTitleSearch, todos]
  );

  const getTodosDetail = useGetTodosDetail();
  const updateTodo = useUpdateTodo();

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragging');

    // Get id from transfer
    const todoId = e.dataTransfer.getData('todoId');
    // Check if the todoId exists in the current list
    const existsInList = todos.some((todo) => todo.id === todoId);

    // If it exists -> skip
    if (!existsInList) {
      try {
        // Get todo based on ID
        let todo: ITodoItem = await getTodosDetail(todoId);

        // set status as the other todos have
        todo.status = todos[0].status;

        // Patch todo
        await updateTodo(todo);

        // Trigger reload
        setReload(!reload);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragging');
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragging');
  };

  return (
    <div
      className='todo-list-container'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <h1 className='todo-list-heading'>{heading}</h1>
      {tempTodos.map((todo) => (
        <TodoItem key={todo.id} {...{ ...todo, buttonLabel }} />
      ))}
    </div>
  );
};

export default TodoList;
