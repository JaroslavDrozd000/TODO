import { ITodoItem } from '../utils/interfaces/interface';

const useGetTodos = () => {
  const getTodos = async () => {
    const GET_TODOS_URL = 'http://localhost:8000/todos';

    const response = await fetch(GET_TODOS_URL);
    const todos: ITodoItem[] = await response.json();

    return todos;
  };

  return getTodos;
};

export default useGetTodos;
