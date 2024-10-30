const useDeleteTodo = () => {
  const deleteTodo = async (id: number) => {
    const response = await fetch(`http://localhost:8000/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error occured while deleting');
    }
  };

  return deleteTodo;
};

export default useDeleteTodo;
