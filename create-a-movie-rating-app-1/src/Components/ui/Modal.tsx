// src/components/ui/Modal.tsx
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useRef, ReactNode } from "react";
import { useModal } from "../../hooks/useModal";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ title, isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useModal(modalRef, onClose, isOpen);

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