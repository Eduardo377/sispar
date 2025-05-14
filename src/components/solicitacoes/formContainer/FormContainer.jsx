/* eslint-disable react/prop-types */
import BoxInfos from '../../../components/solicitacoes/boxInfos/BoxInfos.jsx';
import BoxDate from '../../../components/solicitacoes/boxDate/BoxDate.jsx';
import Values from '../../../components/solicitacoes/values/Values.jsx';
import Table from '../../../components/solicitacoes/table/table.jsx';
import style from './formContainer.module.scss';

export default function FormContainer({
    formData,
    onInputChange,
    onSelectChange,
    onAddItem,
    tableData,
    onDeleteRow
}) {
    return (
        <>
            <form action={`#`} className={`${style.containerFrom}`}>
                <BoxInfos
                    formData={formData}
                    onInputChange={onInputChange}
                />
                <article className={`${style.containerRegistro}`}>
                    <BoxDate
                        formData={formData}
                        onInputChange={onInputChange}
                        onSelectChange={onSelectChange}
                    />
                    <Values
                        formData={formData}
                        onInputChange={onInputChange}
                        onAddItem={onAddItem}
                    />
                </article>
            </form>
            <Table data={tableData} onDelete={onDeleteRow} />
        </>
    );
}