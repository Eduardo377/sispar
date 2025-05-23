/* eslint-disable react/prop-types */
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
                <label htmlFor="internal_order">Ord Int.</label>
                <input
                    id="internal_order"
                    name="internal_order"
                    type="text"
                    value={formData.internal_order}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="pep">PEP</label>
                <input
                    id="pep"
                    name="pep"
                    type="textr"
                    value={formData.pep}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="div">Div.</label>
                <input
                    id="div"
                    name="div"
                    type="text"
                    value={formData.div}
                    onChange={onInputChange}
                />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="distancia">Dist. /Km</label>
                <input
                    id="distance_km"
                    name="distance_km"
                    type="text"
                    value={formData.distance_km}
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
                <label htmlFor="value_km">Valor / Km</label>
                <input
                    id="value_km"
                    name="value_km"
                    type="text"
                    step=".01"
                    value={formData.value_km}
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
                <label htmlFor="value_billed" >Val. Faturado</label>
                <input
                    id="value_billed"
                    name="value_billed"
                    type="number"
                    step=".01"
                    value={formData.value_billed}
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