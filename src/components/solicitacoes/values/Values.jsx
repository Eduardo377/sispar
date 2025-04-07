import { useState } from 'react';

import style from './values.module.scss';
import cruz from '../../../assets/Dashboard/cruzVector.png';
import Cancel from '../../../assets/Dashboard/arrowLeftCancel.png';

import { Modal } from '../../modal/Modal.jsx';

export default function Values() {
    
    const [showModal, setShowModal] = useState(false);
    
    const handleShowModalReset = () => setShowModal(true);
    const handleConfirm = () => setShowModal(false);
    const handleCancel = () => setShowModal(false);

    return (
        <article className={`${style.boxValues}`}>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="ordInt">Ord Int.</label>
                <input id="ordInt" type="number" />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="pep">PEP</label>
                <input id="pep" type="number" />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="div">Div.</label>
                <input id="div" type="number" />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="distancia">Dist. /Km</label>
                <input id="distancia" type="number" />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="moeda">Moeda</label>
                <input id="moeda" type="text" />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="valorKM">Valor / Km</label>
                <input id="valorKM" type="text" />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="taxa">Val. Taxa</label>
                <input id="taxa" type="number" step=".01" />
            </div>
            <div Main className={`${style.boxWidthMax}`}>
                <label htmlFor="faturado" >Val. Faturado</label>
                <input id="faturado" type="number" step=".01" />
            </div>
            <div className={`${style.boxButton}`}>
                <button className={`${style.buttonSalvar}`} >
                    <img src={cruz} alt="" />
                    Salvar
                </button>
                <button
                    className={`${style.buttonCancelar}`}
                    onClick={handleShowModalReset}
                >
                    <img src={Cancel} alt="" />
                </button>
                {showModal && (
                    console.log('Modal deve estar visível agora'),
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