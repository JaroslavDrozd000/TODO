import { useEffect, useState } from 'react';
import { ITodoItem } from '../../../utils/interfaces/interface';
import { useAppContext, useGetTodosArchive } from '../../../hooks';
import './archive.css';
import ArchiveTodo from './ArchiveTodo';

const Archive = () => {
  const { reload } = useAppContext();

  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const getTodosArchive = useGetTodosArchive();

  useEffect(() => {
    (async () => {
      try {
        // Get archive todos
        const archiveTodos = await getTodosArchive();

        setTodos(archiveTodos);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [reload]);

  return (
    <div className='archive-container'>
      {todos.length === 0 ? (
        <h1 className='archive-empty size-xl'>Your archive is empty</h1>
      ) : (
        todos.map((todo) => <ArchiveTodo {...todo} />)
      )}
    </div>
  );
};

export default Archive;
