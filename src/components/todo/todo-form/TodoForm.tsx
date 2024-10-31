import { ChangeEvent, FormEvent, useState } from 'react';
import './todoForm.css';
import { ITodoItem } from '../../../utils/interfaces/interface';
import {
  LABEL_ENUM,
  PRIORITY_ENUM,
  STATUS_ENUM,
} from '../../../utils/enums/enums';
import { uuid } from '../../../utils/functions';
import { useAddTodo, useAppContext, useEditTodo } from '../../../hooks';

const initialTodo: ITodoItem = {
  id: uuid(),
  status: STATUS_ENUM.toDo,
  title: '',
  description: '',
  priority: PRIORITY_ENUM.low,
  label: LABEL_ENUM.personal,
};

interface ITodoForm {
  todo?: ITodoItem | null;
  setOpenModal: (open: boolean) => void;
  type: 'edit' | 'add';
}

const TodoForm = ({ todo = null, setOpenModal, type }: ITodoForm) => {
  const { reload, setReload } = useAppContext();

  const [todoForm, setTodoForm] = useState<ITodoItem>(todo || initialTodo);

  const priorityColor: { [key in PRIORITY_ENUM]: string } = {
    [PRIORITY_ENUM.low]: 'var(--green)',
    [PRIORITY_ENUM.medium]: 'var(--orange)',
    [PRIORITY_ENUM.high]: 'var(--red)',
  };

  const addTodo = useAddTodo();
  const editTodo = useEditTodo();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Determin based on type if edit or add
      if (type === 'edit') await editTodo(todoForm);
      else await addTodo(todoForm); // else add

      // trigger reload todos
      setReload(!reload);
    } catch (err) {
      console.error(err);
    } finally {
      setOpenModal(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // change value based on value and name
    setTodoForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className='todo-form-container' onSubmit={handleSubmit}>
      {/* Title */}
      <div className='todo-form-section-container'>
        <input
          name='title'
          required
          className='todo-form-input size-lg'
          type='text'
          placeholder='Title*'
          value={todoForm.title}
          onChange={handleChange}
          maxLength={50}
        />
        <span className='todo-form-count size-md'>
          {todoForm.title.length}/50
        </span>
      </div>

      {/* Description */}
      <div className='todo-form-section-container'>
        <textarea
          name='description'
          className='todo-form-input size-lg'
          placeholder='Description'
          value={todoForm.description}
          onChange={handleChange}
          maxLength={250}
        />
        <span className='todo-form-count size-md'>
          {todoForm.description.length}/250
        </span>
      </div>

      {/* Priority selection */}
      <div className='todo-form-section-container'>
        <span className='todo-form-label size-lg'>
          Priority
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '100%',
              backgroundColor: priorityColor[todoForm.priority],
            }}
          ></div>
        </span>
        <select
          name='priority'
          className='todo-form-input size-lg'
          defaultValue={todoForm.priority}
          onChange={handleChange}
        >
          {Object.keys(PRIORITY_ENUM).map((key) => (
            <option key={key} value={key}>
              {key.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Label selection */}
      <div className='todo-form-section-container'>
        <span className='todo-form-label size-lg'>Label</span>
        <select
          name='label'
          className='todo-form-input size-lg'
          defaultValue={todoForm.label}
          onChange={handleChange}
        >
          {Object.keys(LABEL_ENUM).map((key) => (
            <option
              key={key}
              value={key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
            >
              {key.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Submit button */}
      <button type='submit' className='form-submit-button size-xl'>
        {type}
      </button>
    </form>
  );
};

export default TodoForm;
