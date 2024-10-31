import { ITodoItem } from '../utils/interfaces/interface';

const useGetTodosArchive = () => {
  const getTodosArchive = async () => {
    const GET_TODOS_ARCHIVE_URL = 'http://localhost:8000/deletedTodos';

    const response = await fetch(GET_TODOS_ARCHIVE_URL);
    const todos: ITodoItem[] = await response.json();

    return todos;
  };

  return getTodosArchive;
};

export default useGetTodosArchive;
