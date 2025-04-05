import Navbar from '../../components/navbar/Navbar.jsx';
import BoxInfos from '../../components/solicitacoes/boxInfos/BoxInfos.jsx';
import BoxDate from '../../components/solicitacoes/boxDate/BoxDate.jsx';
import Values from '../../components/solicitacoes/values/Values.jsx';
import Table from '../../components/solicitacoes/table/table.jsx';

import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';

import style from './solicitacao.module.scss';

export default function Solicitacao() {

    return (

        <div>
            <Navbar />
            <main className={style.main}>
                <section>
                    <span>
                        <img src={vectorHomeIndice} alt="" />
                        <img src={arrowRight} alt="" />
                        <p>Reembolso</p>
                        <img src={arrowRight} alt="" />
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
                            <label htmlFor="name">Total Faturado</label>
                            <input id="number" type="number" placeholder='0.00' />
                        </div>
                        <div>
                            <label htmlFor="empresa">Total Despesa</label>
                            <input id="number" type="number" placeholder='0.00' />
                        </div>
                        <button>Enviar para Análise</button>
                        <button>Cancelar Solicitação</button>
                    </article>
                </section>
            </main>
        </div>
    )
}