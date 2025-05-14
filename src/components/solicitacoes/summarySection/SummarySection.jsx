/* eslint-disable react/prop-types */
import style from './summarySection.module.scss';
import checkIcon from '../../../assets/solicitacao/checkVector.png';
import deleteIcon from '../../../assets/solicitacao/deleteVector.png';

export default function SummarySection({
    totalFaturado,
    totalDespesa,
    onShowModal
}) {
    return (
        <article className={`${style.boxFinalAnalysis}`}>
            <div>
                <label htmlFor="numberFaturado">Total Faturado</label>
                <input
                    id="numberFaturado"
                    type="text"
                    placeholder='0.00'
                    step=".01"
                    value={`R$ ${totalFaturado}`}
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="numberDespesa">Total Despesa</label>
                <input
                    id="numberDespesa"
                    type="text"
                    placeholder='0.00'
                    step=".01"
                    value={`R$ ${totalDespesa}`}
                    readOnly
                />
            </div>
            <button className={`${style.blueAnalise}`}>
                <img src={checkIcon} alt="Enviar para analise" />
                Enviar para Análise
            </button>
            <button className={`${style.redDelete}`} onClick={onShowModal}>
                <img src={deleteIcon} alt="Cancelar solicitação" />
                Cancelar Solicitação
            </button>
        </article>
    );
}