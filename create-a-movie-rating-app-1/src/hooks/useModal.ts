import { useEffect, RefObject } from 'react';

export function useModal(
  modalRef: RefObject<HTMLDivElement>,
  onClose: () => void,
  isActive: boolean
): void {
  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, onClose, isActive]);
}