import { ITodoItem } from '../utils/interfaces/interface';

const useEditTodo = () => {
  const editTodo = async (todo: ITodoItem) => {
    const EDIT_TODO_URL = `http://localhost:8000/todos/${todo.id}`;

    const response = await fetch(EDIT_TODO_URL, {
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

  return editTodo;
};

export default useEditTodo;
