import { ITodoItem } from '../utils/interfaces/interface';

const useUpdateTodo = () => {
  const updateTodo = async (todo: ITodoItem) => {
    const UPDATE_TODO_URL = `http://localhost:8000/todos/${todo.id}`;

    const response = await fetch(UPDATE_TODO_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error('Error occured while updating');
    }
  };

  return updateTodo;
};

export default useUpdateTodo;
