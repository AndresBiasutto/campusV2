import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className=" bg-light-primary dark:bg-dark-primary p-6 rounded-tl-lg rounded-br-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          x
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
