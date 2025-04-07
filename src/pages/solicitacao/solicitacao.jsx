import Navbar from '../../components/navbar/Navbar.jsx';
import BoxInfos from '../../components/solicitacoes/boxInfos/BoxInfos.jsx';
import BoxDate from '../../components/solicitacoes/boxDate/BoxDate.jsx';
import Values from '../../components/solicitacoes/values/Values.jsx';
import Table from '../../components/solicitacoes/table/table.jsx';
// import  {Modal} from '../../components/modal/Modal.jsx';

import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';
import checkIcon from '../../assets/solicitacao/checkVector.png';
import deleteIcon from '../../assets/solicitacao/deleteVector.png';

import style from './solicitacao.module.scss';

// const [showModal, setShowModal] = useState(false);

// const handleShowModalCancel = () => {
//     setShowModal(true);
// };

// const handleConfirm = () => {
//     setShowModal(false);
// };

// const handleCancel = () => {
//     setShowModal(false);
// };

export default function Solicitacao() {

    return (

        <div>
            <Navbar />
            <main className={style.main}>
                <section>
                    <span>
                    <img src={vectorHomeIndice} alt="casa pequena" />
                    <img src={arrowRight} alt="seta pra direita" />
                        <p>Reembolso</p>
                        <img src={arrowRight} alt="seta pra direita" />
                        <p>Solicitação de Reembolso</p>
                    </span>
                    <form action={`#`} className={`${style.containerFrom}`}>
                        <BoxInfos />
                        <article className={`${style.containerRegistro}`}>
                            <BoxDate />
                            <Values />
                        </article>
                    </form>
                    <Table />
                    <article className={`${style.boxFinalAnalysis}`}>
                        <div>
                            <label htmlFor="numberFaturado">Total Faturado</label>
                            <input id="numberFaturado" type="number" placeholder='0.00' step=".01" />
                        </div>
                        <div>
                            <label htmlFor="numberDespesa">Total Despesa</label>
                            <input id="numberDespesa" type="number" placeholder='0.00' step=".01" />
                        </div>
                        <button className={`${style.blueAnalise}`}>
                            <img src={checkIcon} alt="Delete" />
                            Enviar para Análise
                        </button>
                        <button className={`${style.redDelete}`}>
                            <img src={deleteIcon} alt="Delete" />
                            Cancelar Solicitação
                        </button>
                    </article>
                </section>
            </main>
        </div>
    )
}