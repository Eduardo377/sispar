import { useState } from 'react';

import style from './values.module.scss';
import cruz from '../../../assets/Dashboard/cruzVector.png';
import Cancel from '../../../assets/Dashboard/arrowLeftCancel.png';

import { Modal } from '../../modal/Modal.jsx';

export default function Values({ formData, onInputChange, onAddItem }) {

    const [showModal, setShowModal] = useState(false);

    const handleShowModalReset = () => setShowModal(true);
    const handleConfirm = () => setShowModal(false);
    const handleCancel = () => setShowModal(false);

    return (
        <article className={`${style.boxValues}`}>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="ordInt">Ord Int.</label>
                <input
                    id="ordInt"
                    name="ordInt"
                    type="number"
                    value={formData.ordInt}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="pep">PEP</label>
                <input
                    id="pep"
                    name="pep"
                    type="number"
                    value={formData.pep}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="div">Div.</label>
                <input
                    id="div"
                    name="div"
                    type="number"
                    value={formData.div}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="distancia">Dist. /Km</label>
                <input
                    id="distance"
                    name="distance"
                    type="number"
                    value={formData.distance}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="moeda">Moeda</label>
                <input
                    id="currency"
                    name="currency"
                    type="text"
                    value={formData.currency}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="valuekm">Valor / Km</label>
                <input
                    id="valueKm"
                    name="valueKm"
                    type="number"
                    step=".01"
                    value={formData.valueKm}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="expense">Val. Taxa</label>
                <input
                    id="expense"
                    name="expense"
                    type="number"
                    step=".01"
                    value={formData.expense}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="valueBilled" >Val. Faturado</label>
                <input
                    id="valueBilled"
                    name="valueBilled"
                    type="number"
                    step=".01"
                    value={formData.valueBilled}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxButton}`}>
                <button
                    className={`${style.buttonSalvar}`}
                    type="button"
                    onClick={onAddItem}
                >
                    <img src={cruz} alt="Cruz pra salvar." />
                    Salvar
                </button>
                <button
                    className={style.buttonCancelar}
                    onClick={handleShowModalReset}
                    aria-label="Cancelar e limpar campos"
                >
                    <img src={Cancel} alt="Cancelar." />
                </button>
                {showModal && (
                    <Modal
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                        confirm="Deseja realmente limpar os campos preenchidos acima?"
                        cancel="Sim, limpar"
                    />
                )}
            </div>
        </article>
    )
}