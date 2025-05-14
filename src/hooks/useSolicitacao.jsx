import { useState, useEffect, useCallback } from 'react';
import api from '../Services/api.jsx';

export function useSolicitacao() {
    const [showModal, setShowModal] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        account: '',
        date: '',
        expense_type: 'selecionar',
        costControl: 'selecionar',
        ordInt: '',
        div: '',
        pep: '',
        currency: '',
        distance: '',
        value_km: '',
        value_billed: '',
        expense: ''
    });

    const fetchReembolsos = useCallback(async () => {
        try {
            setLoading(true);
            const response = await api.get('/reembolso/listar_reembolsos');
            setTableData(response.data);
            setError(null);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            setError('Erro ao carregar dados do servidor.');
            setTableData([]); // Limpa os dados em caso de erro
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchReembolsos();
    }, [fetchReembolsos]);

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
            expense_type: 'selecionar',
            costControl: 'selecionar',
            ordInt: '',
            div: '',
            pep: '',
            currency: '',
            distance: '',
            value_km: '',
            value_billed: '',
            expense: ''
        });
    };

    const handleAddItem = async () => {
        if (!formData.name || !formData.value_billed || formData.expense_type === 'selecionar') {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        const newReembolso = {
            ...formData,
            value_km: formData.value_km,
            value_billed: parseFloat(formData.value_billed || 0),
            expense: parseFloat(formData.expense || 0)
        };

        try {
            // Usa a rota POST /reembolso/solicitar_reembolso do Swagger
            await api.post('/reembolso/solicitar_reembolso', newReembolso);
            await fetchReembolsos(); // Recarrega os dados
            resetForm();
        } catch (error) {
            console.error('Erro ao solicitar reembolso:', error);
            alert('Erro ao enviar solicitação de reembolso.');
        }
    };

    const handleDeleteRow = async (id_reembolso) => {
        try {
            // Usa a rota DELETE /reembolso/deletar/{id_reembolso} do Swagger
            await api.delete(`/reembolso/deletar/${id_reembolso}`);
            await fetchReembolsos(); // Recarrega os dados
        } catch (error) {
            console.error('Erro ao deletar reembolso:', error);
            alert('Erro ao deletar reembolso.');
        }
    };

    const totalFaturado = tableData.reduce((total, item) => {
        const value = Number(item.value_billed) || 0;
        return total + value;
    }, 0).toFixed(2);

    const totalDespesa = tableData.reduce((total, item) => {
        const value = Number(item.expense) || 0;
        return total + value;
    }, 0).toFixed(2);

    return {
        loading,
        error,
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