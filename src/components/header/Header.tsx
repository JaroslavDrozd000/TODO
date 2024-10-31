import { MdDelete } from 'react-icons/md';
import { useAppContext } from '../../hooks';
import './header.css';
import { useState } from 'react';
import { Archive, Modal, TodoForm } from '..';
import { PRIORITY_ENUM } from '../../utils/enums/enums';

const Header = () => {
  const { setTodoTitleSearch } = useAppContext();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openArchiveModal, setOpenArchiveModal] = useState<boolean>(false);

  const priorityColor: { [key in PRIORITY_ENUM]: string } = {
    [PRIORITY_ENUM.low]: 'var(--green)',
    [PRIORITY_ENUM.medium]: 'var(--orange)',
    [PRIORITY_ENUM.high]: 'var(--red)',
  };

  return (
    <>
      {/* Modals */}
      {openAddModal && (
        <Modal heading='New TODO' setOpen={setOpenAddModal}>
          <TodoForm setOpenModal={setOpenAddModal} type='add' />
        </Modal>
      )}
      {openArchiveModal && (
        <Modal heading='Archive' setOpen={setOpenArchiveModal}>
          <Archive />
        </Modal>
      )}

      {/* Body */}
      <div className='header-container'>
        <button
          className='primary-button header-archive-button size-lg'
          onClick={() => setOpenArchiveModal(true)}
        >
          Archive
          <MdDelete size={20} />
        </button>
        <button
          className='primary-button header-button size-xxl'
          onClick={() => setOpenAddModal(true)}
        >
          Add task
        </button>
        <input
          className='header-input size-lg'
          type='text'
          placeholder='Search task'
          onChange={(e) => setTodoTitleSearch(e.target.value)}
        />

        {/* Legend for priorities */}
        <div className='header-priorities-container size-lg'>
          <span className='header-priorities-title'>Priorities</span>
          <div className='header-priorities-inner-container'>
            {Object.keys(PRIORITY_ENUM).map((key) => (
              <div className='header-priority' key={key}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '100%',
                    backgroundColor: priorityColor[key as PRIORITY_ENUM],
                  }}
                ></div>
                <span>{key.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
