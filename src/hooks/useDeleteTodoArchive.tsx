const useDeleteTodoArchive = () => {
  const deleteTodoArchive = async (id: string) => {
    const DELETE_TODO_ARCHIVE_URL = `http://localhost:8000/deletedTodos/${id}`;

    const response = await fetch(DELETE_TODO_ARCHIVE_URL, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error occured while deleting');
    }
  };

  return deleteTodoArchive;
};

export default useDeleteTodoArchive;
