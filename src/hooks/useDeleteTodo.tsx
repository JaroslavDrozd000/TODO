const useDeleteTodo = () => {
  const deleteTodo = async (id: string) => {
    const DELETE_TODO_URL = `http://localhost:8000/todos/${id}`;

    const response = await fetch(DELETE_TODO_URL, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error occured while deleting');
    }
  };

  return deleteTodo;
};

export default useDeleteTodo;
