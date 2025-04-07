import './modal.module.scss';

export const Modal = ({ onConfirm, onCancel, confirm, cancel }) => {
    return (
        <div className={style.modalContainer}>
            <div className={style.modalBody}>
                <h3>{confirm}</h3>
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