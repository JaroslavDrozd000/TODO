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
  givenTodo?: ITodoItem | null;
  setOpenModal: (open: boolean) => void;
  type: 'edit' | 'add';
}

const TodoForm = ({ givenTodo = null, setOpenModal, type }: ITodoForm) => {
  const { reload, setReload } = useAppContext();

  const [todo, setTodo] = useState<ITodoItem>(givenTodo || initialTodo);

  const addTodo = useAddTodo();
  const editTodo = useEditTodo();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Determin based on type if edit or add
      if (type === 'edit') await editTodo(todo);
      else await addTodo(todo); // else add

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
    setTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className='todo-form-container' onSubmit={handleSubmit}>
      {/* Title */}
      <input
        name='title'
        required
        className='todo-form-input'
        type='text'
        placeholder='Title*'
        value={todo.title}
        onChange={handleChange}
      />

      {/* Description */}
      <textarea
        name='description'
        className='todo-form-input'
        placeholder='Description'
        value={todo.description}
        onChange={handleChange}
      />

      {/* Priority selection */}
      <div className='todo-form-selection'>
        <span className='todo-form-label'>Priority</span>
        <select
          name='priority'
          className='todo-form-input'
          defaultValue={todo.priority}
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
      <div className='todo-form-selection'>
        <span>Label</span>
        <select
          name='label'
          className='todo-form-input'
          defaultValue={todo.label}
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
      <button type='submit' className='form-submit-button'>
        {type}
      </button>
    </form>
  );
};

export default TodoForm;
