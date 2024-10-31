import { ITodoItem } from '../utils/interfaces/interface';

const useGetTodosDetail = () => {
  const getTodosDetail = async (id: string) => {
    const GET_TODOS_DETAIL_URL = `http://localhost:8000/todos?id=${id}`;

    const response = await fetch(GET_TODOS_DETAIL_URL);
    const todos: ITodoItem[] = await response.json();

    return todos[0];
  };

  return getTodosDetail;
};

export default useGetTodosDetail;
