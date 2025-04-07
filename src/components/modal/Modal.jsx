import style from './modal.module.scss';

export const Modal = ({ onConfirm, onCancel, confirm, cancel }) => {
    return (
        <div className={style.modalContainer}>
            <div className={style.modalBody}>
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