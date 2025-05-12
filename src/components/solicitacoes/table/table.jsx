/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './table.module.scss';
import bin from '../../../assets/Dashboard/binVentor.png';
import descriptionReason from '../../../assets/Dashboard/descriptionReasonVector.png';
import { Modal } from '../../modal/Modal.jsx';


export default function Table({ data, onDelete }) {
    const [showModal, setShowModal] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);

    const handleShowModalDelete = (id) => {
        setRowToDelete(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        onDelete(rowToDelete);
        setShowModal(false);
        setRowToDelete(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setRowToDelete(null);
    };
    
    console.log(data);
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
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>
                                <img src={bin} alt="Lixeira para exclusão"
                                    onClick={() => handleShowModalDelete(row.id)}
                                    aria-label={`Excluir ${row.name}`}
                                    className={`${style.buttonDelete}`}
                                />
                            </td>
                            <td>{row.name}</td>
                            <td>{row.company}</td>
                            <td>{row.installment_number}</td>
                            <td>{row.date}</td>
                            <td>
                                <img src={descriptionReason} alt="Descrição do motivo" />
                            </td>
                            <td>{row.expense_type}</td>
                            <td>{row.cost_center}</td>
                            <td>{row.internal_order}</td>
                            <td>{row.div}</td>
                            <td>{row.pep}</td>
                            <td>{row.currency}</td>
                            <td>{row.distance}</td>
                            <td>{row.value_km}</td>
                            <td>{row.value_billed}</td>
                            <td>{row.expense}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <Modal
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    confirm="Deseja realmente excluir os dados dessa linha?"
                    cancel="Sim, excluir"
                />
            )}
        </article>
    );
}