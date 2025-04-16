import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialTableData from '../data/initialTableData.json';
import Api from '../Services/Api.jsx';

export function useSolicitacao() {
    const [showModal, setShowModal] = useState(false);
    const [tableData, setTableData] = useState(initialTableData);
    const [foiEnviado, setFoiEnviado] = useState(false);
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

    //Função async(assíncrona) permite que o código espere algo (resposta do servidor) sem travar o resto do programa.
    const handleEnviarParaAnalise = async () => {
        try {
            //aqui colocamos o que queremos "tentar" fazer

            //1º argumento é caminho da rota "/refunds/new" é uma rota no seu backend
            //2º argumento é o que será enviado: dadosReembolso, os dados do formulário.

            //Faz a requisição POST para o endpoint /refunds/new
            //Enviando juntos os dados que estão salvos no estado "dadosReembolso"
            const response = await Api.post("/refunds/new", dadosReembolso);
            //Mostra no console a resposta da API
            alert("Reembolso solicitado com sucesso!"); //Mostra um alerta avisando que deu certo.
            setFoiEnviado(true); //Ativando o estado "foiEnviado" para true
            console.log(response);
        } catch (error) {
            //Caso dê erro na hora de enviar, ele mostra o erro no console.
            console.log("Erro ao enviar", error); //Mostra o ero se algo der errado
        }
    }

    // Hook UsseEfect serve para reagir a mudança de estado

    useEffect(()=>{
        if (foiEnviado) {
            setDadosReembolso([])
            setFoiEnviado(false)
        }
    }, [foiEnviado]);

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
        handleEnviarParaAnalise,
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