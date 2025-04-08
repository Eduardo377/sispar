import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import { Modal } from '../../components/modal/Modal.jsx';
import Breadcrumb from '../../components/solicitacoes/breadcrumb/Breadcrumb.jsx';
import FormContainer from '../../components/formContainer/FormContainer.jsx';
import SummarySection from '../../components/summarySection/SummarySection.jsx';
import { useSolicitacao } from '../../hooks/useSolicitacao.jsx';
import style from './solicitacao.module.scss';

export default function Solicitacao() {
    const {
        showModal,
        tableData,
        formData,
        handleShowModalCancel,
        handleAddItem,
        handleConfirm,
        handleCancel,
        handleInputChange,
        handleSelectChange,
        handleDeleteRow,
        totalFaturado,
        totalDespesa
    } = useSolicitacao();

    return (
        <div>
            <Navbar />
            <main className={style.main}>
                <section>
                    <Breadcrumb />

                    <FormContainer
                        formData={formData}
                        onInputChange={handleInputChange}
                        onSelectChange={handleSelectChange}
                        onAddItem={handleAddItem}
                        tableData={tableData}
                        onDeleteRow={handleDeleteRow}
                    />

                    <SummarySection
                        totalFaturado={totalFaturado}
                        totalDespesa={totalDespesa}
                        onShowModal={handleShowModalCancel}
                    />

                    {showModal && (
                        <Modal
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                            confirm="Tem certeza que deseja cancelar a solicitação?"
                            cancel="Sim, cancelar"
                        />
                    )}
                </section>
            </main>
        </div>
    )
}