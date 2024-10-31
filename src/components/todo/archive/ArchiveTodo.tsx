import './archiveTodo.css';
import { MdDelete, MdSettingsBackupRestore } from 'react-icons/md';
import { ITodoItem } from '../../../utils/interfaces/interface';
import {
  useAddTodo,
  useAppContext,
  useDeleteTodoArchive,
} from '../../../hooks';

const ArchiveTodo = (todo: ITodoItem) => {
  const { reload, setReload } = useAppContext();

  const addTodo = useAddTodo();
  const deleteTodoArchive = useDeleteTodoArchive();

  const handleRestoreButton = async () => {
    try {
      // Delete todo by id
      await deleteTodoArchive(todo.id);

      // Put deleted todo to archive
      await addTodo(todo);

      // Reload
      setReload(!reload);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteButton = async () => {
    try {
      // Delete todo pernamently
      await deleteTodoArchive(todo.id);

      // Reload
      setReload(!reload);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='archive-todo-container' key={todo.id}>
      <h1 className='archive-todo-title size-xl'>{todo.title}</h1>
      <div className='archive-todo-buttons'>
        <button className='archive-restore' onClick={handleRestoreButton}>
          <MdSettingsBackupRestore size={25} />
        </button>
        <button className='archive-delete' onClick={handleDeleteButton}>
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};

export default ArchiveTodo;
