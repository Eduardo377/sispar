import React, { useState, useEffect, useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Navbar from '../../components/navbar/Navbar.jsx';
import BoxInfos from '../../components/solicitacoes/boxInfos/BoxInfos.jsx';
import BoxDate from '../../components/solicitacoes/boxDate/BoxDate.jsx';
import Values from '../../components/solicitacoes/values/Values.jsx';
import Table from '../../components/solicitacoes/table/table.jsx';
import { Modal } from '../../components/modal/Modal.jsx';
import initialTableData from '../../data/initialTableData.json';
import style from './solicitacao.module.scss';

import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';
import checkIcon from '../../assets/solicitacao/checkVector.png';
import deleteIcon from '../../assets/solicitacao/deleteVector.png';

export default function Solicitacao() {
    const [showModal, setShowModal] = useState(false);
    const [tableData, setTableData] = useState(initialTableData);


    const handleShowModalCancel = () => {
        setShowModal(true);
    };

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        account: '',
        date: '',
        expenseType: 'selecionar',
        costControl: 'selecionar',
        ordInt: '',
        div: '',
        pep: '',
        currency: '',
        distance: '',
        valueKm: '',
        valueBilled: '',
        expense: '',
        description: ''
    });

    const handleAddItem = () => {
        if (!formData.name || !formData.valueBilled || formData.expenseType === 'selecionar') {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        const newItem = {
            id: uuidv4(),
            ...formData,
            valueKm: parseFloat(formData.valueKm || 0),
            valueBilled: parseFloat(formData.valueBilled || 0),
            expense: parseFloat(formData.expense || 0)
        };

        const updatedTable = [...tableData, newItem];
        setTableData(updatedTable);
        localStorage.setItem('tableData', JSON.stringify(updatedTable));
        resetForm();
    };

    const handleConfirm = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            company: '',
            account: '',
            date: '',
            expenseType: 'selecionar',
            costControl: 'selecionar',
            ordInt: '',
            div: '',
            pep: '',
            currency: '',
            distance: '',
            valueKm: '',
            valueBilled: '',
            expense: '',
            description: ''
        });
    };

    const handleDeleteRow = (id) => {
        const updatedData = tableData.filter(item => item.id !== id);
        setTableData(updatedData);
        localStorage.setItem('tableData', JSON.stringify(updatedData));
    };

    const handleDeleteData = (id) => {
        const updatedData = tableData.filter((data) => data.id !== id);
        setTableData(updatedData);
    };

    const totalFaturado = tableData.reduce((total, item) => total + item.valueBilled, 0).toFixed(2);
    const totalDespesa = tableData.reduce((total, item) => total + item.expense, 0).toFixed(2);

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
                        <BoxInfos formData={formData} onInputChange={handleInputChange} />
                        <article className={`${style.containerRegistro}`}>
                            <BoxDate
                                formData={formData}
                                onInputChange={handleInputChange}
                                onSelectChange={handleSelectChange}
                            />
                            <Values
                                formData={formData}
                                onInputChange={handleInputChange}
                                onAddItem={handleAddItem}
                            />
                        </article>
                    </form>
                    <Table data={tableData} onDelete={handleDeleteRow} />
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