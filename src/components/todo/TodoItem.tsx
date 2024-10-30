import { IoIosHelpCircleOutline, IoIosSchool } from 'react-icons/io';
import { LabelEnum, PriorityEnum } from '../../utils/enums/enums';
import { ITodoItem } from '../../utils/interfaces/interface';
import './todoItem.css';
import { FaBriefcase, FaUser } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';

interface ITodoItemParams extends ITodoItem {
  buttonLabel: string;
}

const TodoItem = ({ buttonLabel, title, priority, label }: ITodoItemParams) => {
  const priorityColor: { [key in PriorityEnum]: string } = {
    [PriorityEnum.low]: 'green',
    [PriorityEnum.medium]: 'orange',
    [PriorityEnum.high]: 'red',
  };
  const labelIcon: { [key in LabelEnum]: JSX.Element } = {
    [LabelEnum.school]: <IoIosSchool size={40} />,
    [LabelEnum.personal]: <FaUser size={30} />,
    [LabelEnum.job]: <FaBriefcase size={30} />,
  };

  return (
    <div className='todo-item-container'>
      {/* Priority */}
      <div className='todo-item-priority-indicator-container'>
        {/* Icon */}
        {labelIcon[label]}
        <span
          className='todo-item-priority-indicator'
          style={{
            backgroundColor: priorityColor[priority],
          }}
          aria-label={`Priority: ${priority}`} // Accessibility improvement
        />
      </div>
      <div className='todo-item-inner-container'>
        <div className='todo-item-upper-container'>
          {/* Title */}
          <div className='todo-item-title-container'>
            <h3 className='todo-item-title'>{title}</h3>
            <button>
              <IoIosHelpCircleOutline size={25} />
            </button>
          </div>

          {/* Buttons */}
          <div className='todo-item-buttons-container'>
            <button className='todo-item-button todo-item-delete-button'>
              <MdDelete size={20} />
            </button>
            <button className='todo-item-button todo-item-edit-button'>
              <MdEdit size={20} />
            </button>
          </div>
        </div>
        <div className='todo-item-lower-container'>
          <button className='todo-item-action-button'>{buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
