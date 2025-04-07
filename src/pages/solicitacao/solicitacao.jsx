import React, { useState } from 'react';

import Navbar from '../../components/navbar/Navbar.jsx';
import BoxInfos from '../../components/solicitacoes/boxInfos/BoxInfos.jsx';
import BoxDate from '../../components/solicitacoes/boxDate/BoxDate.jsx';
import Values from '../../components/solicitacoes/values/Values.jsx';
import Table from '../../components/solicitacoes/table/table.jsx';
import data from '../../data/initialTableData.json';


import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';
import checkIcon from '../../assets/solicitacao/checkVector.png';
import deleteIcon from '../../assets/solicitacao/deleteVector.png';

import style from './solicitacao.module.scss';

export default function Solicitacao() {

    const [showModal, setShowModal] = useState(false);

    const handleShowModalCancel = () => {
        setShowModal(true);
    };

    const handleConfirm = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const totalFaturado = data.reduce((total, item) => total + item.valueBilled, 0).toFixed(2);
    const totalDespesa = data.reduce((total, item) => total + item.expense, 0).toFixed(2);

    return (
        <div>
            <Navbar />
            <main className={style.main}>
                <section>
                    <span>
                        <img src={vectorHomeIndice} alt="casa pequena" />
                        <img src={arrowRight} alt="seta pra direita" />
                        <p>Reembolso</p>
                        <img src={arrowRight} alt="seta pra direita" />
                        <p>Solicitação de Reembolso</p>
                    </span>
                    <form action={`#`} className={`${style.containerFrom}`}>
                        <BoxInfos />
                        <article className={`${style.containerRegistro}`}>
                            <BoxDate />
                            <Values />
                        </article>
                    </form>
                    <Table />
                    <article className={`${style.boxFinalAnalysis}`}>
                        <div>
                            <label htmlFor="numberFaturado">Total Faturado</label>
                            <input
                                id="numberFaturado"
                                type="number"
                                placeholder='0.00'
                                step=".01"
                                value={totalFaturado}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="numberDespesa">Total Despesa</label>
                            <input
                            id="numberDespesa"
                            type="number"
                            placeholder='0.00'
                            step=".01"
                            value={totalDespesa}
                            readOnly
                            />
                        </div>
                        <button className={`${style.blueAnalise}`}>
                            <img src={checkIcon} alt="Enviar para analise" />
                            Enviar para Análise
                        </button>
                        <button className={`${style.redDelete}`} onClick={handleShowModalCancel}>
                            <img src={deleteIcon} alt="Cancelar solicitação" />
                            Cancelar Solicitação
                        </button>
                        {showModal && (
                            <Modal
                                onConfirm={handleConfirm}
                                onCancel={handleCancel}
                                confirm="Tem certeza que deseja cancelar a solicitação?"
                                cancel="Sim, cancelar"
                            />
                        )}
                    </article>
                </section>
            </main>
        </div>
    )
}