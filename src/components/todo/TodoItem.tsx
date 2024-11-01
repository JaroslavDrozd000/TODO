import './todoItem.css';
import { MdDelete, MdEdit, MdInfo } from 'react-icons/md';
import { PRIORITY_ENUM, STATUS_ENUM } from '../../utils/enums/enums';
import { ITodoItem } from '../../utils/interfaces/interface';
import {
  useAddTodoArchive,
  useAppContext,
  useDeleteTodo,
  useEditTodo,
} from '../../hooks';
import { DragEvent, useState } from 'react';
import { Modal, TodoDetail, TodoForm } from '..';

interface ITodoItemParams {
  buttonLabel: string;
  todo: ITodoItem;
}

const TodoItem = ({ todo, buttonLabel }: ITodoItemParams) => {
  const { reload, setReload } = useAppContext();

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDetailModal, setOpenDetailModal] = useState<boolean>(false);

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

  const editTodo = useEditTodo();
  const deleteTodo = useDeleteTodo();
  const addTodoArchive = useAddTodoArchive();

  const handleActionButton = async () => {
    try {
      // Update the status using the mapping
      todo.status = statusTransitions[todo.status as STATUS_ENUM];

      // Patch todo
      await editTodo(todo);

      // Trigger reload
      setReload(!reload);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteButton = async () => {
    try {
      // Delete todo by id
      await deleteTodo(todo.id);

      // Put deleted todo to archive
      await addTodoArchive(todo);

      // Reload
      setReload(!reload);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('todoId', todo.id);
  };

  return (
    <>
      {/* Modals */}
      {openEditModal && (
        <Modal heading='Edit TODO' setOpen={setOpenEditModal}>
          <TodoForm type='edit' setOpenModal={setOpenEditModal} todo={todo} />
        </Modal>
      )}
      {openDetailModal && (
        <Modal heading='TODO Detail' setOpen={setOpenDetailModal}>
          <TodoDetail todo={todo} />
        </Modal>
      )}

      {/* Body */}
      <div
        className='todo-item-container'
        draggable
        onDragStart={handleDragStart}
      >
        {/* Priority */}
        <span
          className='todo-item-priority-indicator'
          style={{
            backgroundColor: priorityColor[todo.priority],
          }}
          aria-label={`Priority: ${todo.priority}`}
        />
        <div className='todo-item-inner-container'>
          <div className='todo-item-content-container'>
            {/* Info */}
            <div className='todo-item-info-container'>
              <p className='size-lg'>{todo.label}</p>
              <h1 className='todo-item-info-title size-xxl'>{todo.title}</h1>
            </div>

            {/* Buttons */}
            <div className='todo-item-buttons-container'>
              {/* Info */}
              <button
                className='todo-item-info'
                onClick={() => setOpenDetailModal(true)}
              >
                <MdInfo size={25} />
              </button>

              {/* Delete */}
              <button className='todo-item-delete' onClick={handleDeleteButton}>
                <MdDelete size={25} />
              </button>

              {/* Edit */}
              <button
                className='todo-item-edit'
                onClick={() => setOpenEditModal(true)}
              >
                <MdEdit size={25} />
              </button>
            </div>
          </div>

          {/* Action button */}
          <div className='todo-item-action-button-container'>
            <button
              className='primary-button size-lg'
              onClick={handleActionButton}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
