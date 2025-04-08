import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import { Modal } from '../../components/modal/Modal.jsx';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb.jsx';
import FormContainer from '../../components/solicitacoes/formContainer/FormContainer.jsx';
import SummarySection from '../../components/solicitacoes/summarySection/SummarySection.jsx';
import { useSolicitacao } from '../../hooks/useSolicitacao.jsx';

import arrowRight from '../../assets/Dashboard/arrowRight.png'

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
                    <Breadcrumb
                        title1={"Reembolsos"}
                        image={arrowRight}
                        title2={"Solicitação de Reembolso"}
                    />

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