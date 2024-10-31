import { MdDelete, MdEdit, MdInfo } from 'react-icons/md';
import { PRIORITY_ENUM, STATUS_ENUM } from '../../utils/enums/enums';
import { ITodoItem } from '../../utils/interfaces/interface';
import './todoItem.css';
import { useAppContext, useDeleteTodo, useUpdateTodo } from '../../hooks';
import { DragEvent } from 'react';

interface ITodoItemParams extends ITodoItem {
  buttonLabel: string;
}

const TodoItem = ({
  id,
  status,
  description,
  buttonLabel,
  title,
  priority,
  label,
}: ITodoItemParams) => {
  const { reload, setReload } = useAppContext();

  const priorityColor: { [key in PRIORITY_ENUM]: string } = {
    [PRIORITY_ENUM.low]: 'var(--green)',
    [PRIORITY_ENUM.medium]: 'var(--orange)',
    [PRIORITY_ENUM.high]: 'var(--red)',
  };
  const statusTransitions: { [key in STATUS_ENUM]: string } = {
    [STATUS_ENUM.toDo]: STATUS_ENUM.inProgress,
    [STATUS_ENUM.inProgress]: STATUS_ENUM.done,
    [STATUS_ENUM.done]: STATUS_ENUM.toDo,
  };

  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const handleActionClick = async () => {
    try {
      // Create todo object
      let todo: ITodoItem = {
        id,
        status,
        title,
        description,
        priority,
        label,
      };

      // Update the status using the mapping
      todo.status = statusTransitions[todo.status as STATUS_ENUM];

      // Patch todo
      await updateTodo(todo);

      // Trigger reload
      setReload(!reload);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClick = async () => {
    try {
      // Delete todo by id
      await deleteTodo(id);

      // Reload
      setReload(!reload);
    } catch (err) {
      console.error(err);
    }
  };
  const handleEditClick = async () => {};

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('todoId', id);
  };

  return (
    <div
      className='todo-item-container'
      draggable
      onDragStart={handleDragStart}
    >
      {/* Priority */}
      <span
        className='todo-item-priority-indicator'
        style={{
          backgroundColor: priorityColor[priority],
        }}
        aria-label={`Priority: ${priority}`}
      />
      <div className='todo-item-inner-container'>
        <div className='todo-item-content-container'>
          {/* Info */}
          <div className='todo-item-info-container'>
            <p className='todo-item-info-label'>{label}</p>
            <h1 className='todo-item-info-title'>{title}</h1>
          </div>

          {/* Buttons */}
          <div className='todo-item-buttons-container'>
            {/* Info */}
            <button className='todo-item-info'>
              <MdInfo size={25} />
            </button>

            {/* Delete */}
            <button className='todo-item-delete' onClick={handleDeleteClick}>
              <MdDelete size={25} />
            </button>

            {/* Edit */}
            <button className='todo-item-edit' onClick={handleEditClick}>
              <MdEdit size={25} />
            </button>
          </div>
        </div>

        {/* Action button */}
        <div className='todo-item-action-button-container'>
          <button
            className='todo-item-action-button'
            onClick={handleActionClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
