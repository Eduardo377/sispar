import React, { useState, useEffect } from 'react';
import initialTableData from '../../../data/initialTableData.json';
import style from './table.module.scss';
import bin from '../../../assets/Dashboard/binVentor.png';
import descriptionReason from '../../../assets/Dashboard/descriptionReasonVector.png';
import { Modal } from '../../modal/Modal.jsx';


export default function Table() {
    const [tableData, setTableData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);

    useEffect(() => {
        const loadData = () => {
            try {
                const savedData = localStorage.getItem('tableData');
                if (savedData) {
                    setTableData(JSON.parse(savedData));
                } else {
                    setTableData(initialTableData);
                    localStorage.setItem('tableData', JSON.stringify(initialTableData));
                }
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
                setTableData(initialTableData);
            }
        };

        loadData();
    }, []);

    useEffect(() => {
        if (tableData.length > 0) {
            localStorage.setItem('tableData', JSON.stringify(tableData));
        }
    }, [tableData]);

    const handleDeleteRow = (id) => {
        const updatedData = tableData.filter(row => row.id !== id);
        setTableData(updatedData);
    };

    const handleShowModalDelete = (id) => {
        setRowToDelete(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        handleDeleteRow(rowToDelete);
        setShowModal(false);
        setRowToDelete(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setRowToDelete(null);
    };

    if (!tableData) {
        return <div>Carregando dados...</div>;
    }

    return (
        <article className={style.tableWrapper}>
            <table className={style.tableContainer}>
                <thead>
                    <tr className={style.tableHead}>
                        <th className={style.colFirstBox}>{" "}</th>
                        <th>Colaborador(a)</th>
                        <th>Empresa</th>
                        <th>Nº Prest.</th>
                        <th>Data</th>
                        <th>Motivo</th>
                        <th>Tipo de despesa</th>
                        <th>Ctr. Custo</th>
                        <th>Ord. Int.</th>
                        <th>Div.</th>
                        <th>PEP</th>
                        <th>Moeda</th>
                        <th>Dist. Km</th>
                        <th>Val. Km</th>
                        <th>Val. Faturado</th>
                        <th>Despesa</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td className={`${style.deleteButton}`}>
                                <img src={bin} alt="Lixeira para exclusão"
                                    onClick={() => handleShowModalDelete(row.id)}
                                    aria-label={`Excluir ${row.name}`}
                                    className={`${style.buttonDelete}`}
                                />
                                {showModal && (
                                    <Modal
                                        onConfirm={handleConfirm}
                                        onCancel={handleCancel}
                                        confirm="Deseja realmente excluir os dados dessa linha?"
                                        cancel="Sim, excluir"
                                    />
                                )}
                            </td>
                            <td>{row.name}</td>
                            <td>{row.company}</td>
                            <td>{row.account}</td>
                            <td>{row.date}</td>
                            <td>
                                <img src={descriptionReason} alt="Descrição do motivo" />
                            </td>
                            <td>{row.expenseType}</td>
                            <td>{row.costControl}</td>
                            <td>{row.ordInt}</td>
                            <td>{row.div}</td>
                            <td>{row.pep}</td>
                            <td>{row.currency}</td>
                            <td>{row.distance}</td>
                            <td>{row.valueKm.toFixed(2)}</td>
                            <td>{row.valueBilled.toFixed(2)}</td>
                            <td>{row.expense.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}