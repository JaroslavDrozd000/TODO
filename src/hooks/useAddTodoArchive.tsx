import { ITodoItem } from '../utils/interfaces/interface';

const useAddTodoArchive = () => {
  const addTodoArchive = async (todo: ITodoItem) => {
    const ADD_TODO_ARCHIVE_URL = `http://localhost:8000/deletedTodos`;

    const response = await fetch(ADD_TODO_ARCHIVE_URL, {
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

  return addTodoArchive;
};

export default useAddTodoArchive;
