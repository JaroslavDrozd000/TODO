import { MdDelete } from 'react-icons/md';
import { useAppContext } from '../../hooks';
import './header.css';
import { useState } from 'react';
import { Archive, Modal, TodoForm } from '..';

const Header = () => {
  const { setTodoTitleSearch } = useAppContext();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openArchiveModal, setOpenArchiveModal] = useState<boolean>(false);

  return (
    <>
      {/* Modals */}
      {openAddModal && (
        <Modal setOpen={setOpenAddModal} buttonLabel='Add'>
          <TodoForm />
        </Modal>
      )}
      {openArchiveModal && (
        <Modal setOpen={setOpenArchiveModal}>
          <Archive />
        </Modal>
      )}

      {/* Body */}
      <div className='header-container'>
        <button
          className='primary-button header-archive-button'
          onClick={() => setOpenArchiveModal(true)}
        >
          Archive
          <MdDelete size={20} />
        </button>
        <button
          className='primary-button header-button'
          onClick={() => setOpenAddModal(true)}
        >
          Add Task
        </button>
        <input
          className='header-input'
          type='text'
          placeholder='Search task'
          onChange={(e) => setTodoTitleSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Header;
