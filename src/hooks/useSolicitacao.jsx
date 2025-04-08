import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialTableData from '../data/initialTableData.json';

export function useSolicitacao() {
    const [showModal, setShowModal] = useState(false);
    const [tableData, setTableData] = useState(initialTableData);
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

    const handleDeleteRow = (id) => {
        const updatedData = tableData.filter(item => item.id !== id);
        setTableData(updatedData);
        localStorage.setItem('tableData', JSON.stringify(updatedData));
    };

    const totalFaturado = tableData.reduce((total, item) => total + item.valueBilled, 0).toFixed(2);
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