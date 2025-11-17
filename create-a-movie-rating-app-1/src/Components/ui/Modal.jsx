import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";

export default function Modal({ title, isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Función para manejar Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Función para manejar click fuera del modal
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    // Agregar event listeners
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup: remover event listeners cuando el componente se desmonta
    // o cuando isOpen cambia
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper-inner" ref={modalRef}>
        {title && (
          <h3 className="modal-title">
            {title}
            <button className="modal-close-button" onClick={onClose}>
              <XMarkIcon className="w-8 h-8" />
            </button>
          </h3>
        )}
        <div className="modal-inner">{children}</div>
      </div>
    </div>
  );
}