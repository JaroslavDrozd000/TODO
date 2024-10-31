import './todoDetail.css';
import { STATUS_ENUM } from '../../../utils/enums/enums';
import { ITodoItem } from '../../../utils/interfaces/interface';

interface ITodoDetailParams {
  todo: ITodoItem;
}

const TodoDetail = ({ todo }: ITodoDetailParams) => {
  const statusMapping: { [key in STATUS_ENUM]: string } = {
    [STATUS_ENUM.done]: 'Done',
    [STATUS_ENUM.inProgress]: 'In progress',
    [STATUS_ENUM.toDo]: 'To do',
  };

  return (
    <div className='todo-detail-container'>
      {/* Title */}
      <div>
        <h1 className='size-xl'>Title</h1>
        <h2 className='size-lg todo-detail-info'>{todo.title}</h2>
      </div>

      {/* Description */}
      <div>
        <h1 className='size-xl'>Description</h1>
        <h2 className='size-lg todo-detail-info'>{todo.description}</h2>
      </div>

      {/* Priority */}
      <div>
        <h1 className='size-xl'>Priority</h1>
        <h2 className='size-lg todo-detail-info'>{todo.priority}</h2>
      </div>

      {/* Label */}
      <div>
        <h1 className='size-xl'>Label</h1>
        <h2 className='size-lg todo-detail-info'>{todo.label}</h2>
      </div>

      {/* Status */}
      <div>
        <h1 className='size-xl'>Status</h1>
        <h2 className='size-lg todo-detail-info'>
          {statusMapping[todo.status as STATUS_ENUM]}
        </h2>
      </div>
    </div>
  );
};

export default TodoDetail;
