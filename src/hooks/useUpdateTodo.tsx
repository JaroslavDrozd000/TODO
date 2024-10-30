import { ITodoItem } from '../utils/interfaces/interface';

const useUpdateTodo = () => {
  const updateTodo = async (todo: ITodoItem) => {
    const response = await fetch(`http://localhost:8000/todos/${todo.id}`, {
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
