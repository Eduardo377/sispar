/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import initialTableData from '../data/initialTableData.json';
import api from '../services/api';

export function useSolicitacao() {
    const [showModal, setShowModal] = useState(false);
    const [tableData, setTableData] = useState(
        api.get('/reembolso/listar_reembolsos')
            .then(response => {
                response.data
                console.log('Reembolsos:', response.data);
                const formattedData = response.data.map(item => ({
                    id: item.id,
                    name: item.name,
                    company: item.company,
                    installment_number: item.installment_number,
                    date: item.date,
                    expense_type: item.expense_type,
                    cost_center: item.cost_center,
                    internal_order: item.internal_order,
                    div: item.div,
                    pep: item.pep,
                    currency: item.currency,
                    distance_km: item.distance_km,
                    value_km: parseFloat(item.value_km),
                    value_billed: parseFloat(item.value_billed),
                    expense: parseFloat(item.expense),
                    description: item.description
                }));
            })
            .catch(() => {
                console.log('Erro ao buscar reembolsos:');
            }));
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        installment_number: '',
        date: '',
        expense_type: 'selecionar',
        cost_center: 'selecionar',
        internal_order: '',
        div: '',
        pep: '',
        currency: '',
        distance_km: '',
        value_km: '',
        value_billed: '',
        expense: '',
        description: ''
    });

    useEffect(() => {
        const savedData = localStorage.getItem('tableData');
        if (savedData) {
            setTableData(JSON.parse(savedData));
        }
    }, []);

    const handleShowModalCancel = () => setShowModal(true);
    const handleConfirm = () => setShowModal(false);
    const handleCancel = () => setShowModal(false);

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
            installment_number: '',
            date: '',
            expense_type: 'selecionar',
            cost_center: 'selecionar',
            internal_order: '',
            div: '',
            pep: '',
            currency: '',
            distance_km: '',
            value_km: '',
            value_billed: '',
            expense: '',
            description: ''
        });
    };

    const handleAddItem = () => {
        if (!formData.name || !formData.value_billed || formData.expense_type === 'selecionar') {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        const newItem = {
            id: uuidv4(),
            ...formData,
            value_km: parseFloat(formData.value_km || 0),
            value_billed: parseFloat(formData.value_billed || 0),
            expense: parseFloat(formData.expense || 0)
        };

        const updatedTable = [...tableData, newItem];
        setTableData(updatedTable);
        localStorage.setItem('tableData', JSON.stringify(updatedTable));
        resetForm();
    };

    const handleDeleteRow = (id) => {
        const updatedData = tableData.filter(item => item.id !== id);
        setTableData(updatedData);
        localStorage.setItem('tableData', JSON.stringify(updatedData));
    };

    const totalFaturado = tableData.reduce((total, item) => total + item.value_billed, 0).toFixed(2);
    const totalDespesa = tableData.reduce((total, item) => total + item.expense, 0).toFixed(2);

    return {
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
    };
}