import React, { useEffect } from 'react';

import style from './modal.module.scss';

export const Modal = ({ onConfirm, onCancel, confirm, cancel }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onCancel();
            }
        };

        document.body.style.overflow = 'hidden';
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onCancel]);

    return (
        <div className={style.modalContainer}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className={style.modalBody}
                onClick={(e) => e.stopPropagation()}
            >
                <p>{confirm}</p>
                <div className={style.boxButtonModal}>
                    <button onClick={onCancel} className={style.btnCancel}>
                        Continuar Editando
                    </button>
                    <button onClick={onConfirm} className={style.btnConfirm}>
                        {cancel}
                    </button>
                </div>
            </div>
        </div>
    );
};