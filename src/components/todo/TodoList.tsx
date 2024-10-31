import './todoList.css';
import { DragEvent, useMemo, useState } from 'react';
import { useAppContext, useGetTodosDetail, useEditTodo } from '../../hooks';
import { ITodoItem, ITodoList } from '../../utils/interfaces/interface';
import { TodoItem } from '..';
import { PRIORITY_ENUM } from '../../utils/enums/enums';

interface ITodoListParams extends ITodoList {}

const TodoList = ({ heading, status, buttonLabel, todos }: ITodoListParams) => {
  const { todoTitleSearch, setReload, reload } = useAppContext();

  const [order, setOrder] = useState<string>('title');
  const tempTodos = useMemo(() => {
    // Filter todos by title
    const filteredTodos = todos.filter((todo) =>
      todo.title
        .toLocaleLowerCase()
        .includes(todoTitleSearch.toLocaleLowerCase())
    );

    // Arr for sorting order
    const priorityOrder = [
      PRIORITY_ENUM.low,
      PRIORITY_ENUM.medium,
      PRIORITY_ENUM.high,
    ];

    // Sort based on the order value
    return filteredTodos.sort((a, b) => {
      switch (order) {
        // A to Z
        case 'title':
          return a.title.localeCompare(b.title);

        // Z to A
        case '-title':
          return b.title.localeCompare(a.title);

        // LOW to HIGH
        case 'priority':
          return (
            priorityOrder.indexOf(a.priority) -
            priorityOrder.indexOf(b.priority)
          );

        // HIGH to LOW
        case '-priority':
          return (
            priorityOrder.indexOf(b.priority) -
            priorityOrder.indexOf(a.priority)
          );

        // If the order is not recognize
        default:
          return 0;
      }
    });
  }, [todoTitleSearch, todos, order]);

  const getTodosDetail = useGetTodosDetail();
  const editTodo = useEditTodo();

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

        // Set status
        todo.status = status;

        // Patch todo
        await editTodo(todo);

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
      <select
        className='todo-list-sort size-lg'
        name='sort'
        defaultValue={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value='title'>Title ↓</option>
        <option value='priority'>Priority ↓</option>
        <option value='-title'>Title ↑</option>
        <option value='-priority'>Priority ↑</option>
      </select>
      <h1 className='todo-list-heading size-xxl'>{heading}</h1>
      {tempTodos.length === 0 ? (
        <h1 className='todo-list-empty size-xxl'>{heading} list is empty</h1>
      ) : (
        tempTodos.map((todo) => (
          <TodoItem key={todo.id} {...{ todo, buttonLabel }} />
        ))
      )}
    </div>
  );
};

export default TodoList;
