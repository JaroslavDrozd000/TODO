import { ReactNode, useEffect, useRef } from 'react';
import './modal.css';

interface IModalParams {
  children: ReactNode;
  setOpen: (open: boolean) => void;
  buttonLabel?: string;
}

const Modal = ({ setOpen, children, buttonLabel = '' }: IModalParams) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set focus to first div for esc key to close
    if (ref.current) ref.current.focus();
  }, [ref]);

  return (
    <div
      ref={ref}
      className='modal-container'
      onClick={() => setOpen(false)}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.code === 'Escape') setOpen(false);
      }}
    >
      <div
        className='modal-inner-container'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Children */}
        {children}

        {/* Action buttons */}
        <div className='modal-buttons-container'>
          {buttonLabel && (
            <button className='modal-action-button'>{buttonLabel}</button>
          )}
          <button className='modal-close-button' onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
