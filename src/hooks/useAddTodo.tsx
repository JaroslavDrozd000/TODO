import { ITodoItem } from '../utils/interfaces/interface';

const useAddTodo = () => {
  const addTodo = async (todo: ITodoItem) => {
    const ADD_TODO_URL = `http://localhost:8000/todos`;

    const response = await fetch(ADD_TODO_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error('Error occured while uploading');
    }
  };

  return addTodo;
};

export default useAddTodo;
