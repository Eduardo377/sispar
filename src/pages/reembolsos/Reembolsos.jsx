import Navbar from '../../components/navbar/Navbar.jsx';
import Card from '../../components/reembolsos/dashboard/cards/Card.jsx';

import style from './reembolsos.module.scss';

import solicitarReeembolso from '../../assets/Dashboard/solicitarReembolso.png';
import solicitarAnalise from '../../assets/Dashboard/solicitarAnálises.png';
import solicitarHistorico from '../../assets/Dashboard/solicitarHistórico.png';
import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';
import NSolicitados from '../../assets/Dashboard/N-Solicitados.png';
import NAnalises from '../../assets/Dashboard/N-Análises.png';
import NAprovados from '../../assets/Dashboard/N-Aprovados.png';
import NRejeitados from '../../assets/Dashboard/N-Rejeitados.png';
import sistemaAtualizado from '../../assets/Dashboard/sistemaAtualizado.png';

export default function Reembolsos() {

    return (
        <div className={style.body}>
            <Navbar />
            <main className={style.main}>
                <span>
                    <img src={vectorHomeIndice} alt="Ícone de índice da página inicial" />
                    <img src={arrowRight} alt="Ícone de seta para a direita" />
                    <p>Reembolso</p>
                </span>
                <section>
                    <article>
                        <div className={`${style.infos}`}>
                            <h4>
                                Sistema de Reembolsos
                            </h4>
                            <p>
                                Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.
                            </p>
                        </div>
                        <div className={`${style.cardsContainer}`}>
                            <Card
                                image={solicitarReeembolso}
                                description="icone de solicitar reembolso"
                                title="Solicitar Reembolso"
                            />
                            <Card
                                image={solicitarAnalise}
                                description="icone analise"
                                title="Verificar análises"
                            />
                            <Card
                                image={solicitarHistorico}
                                description="icone historico"
                                title="Histórico"
                            />
                        </div >
                        <div className={`${style.infoContainer}`}>
                            <figure className={style.infoFigure}>
                                <img src={NSolicitados} className={style.NSolicitadosImage} alt='icone de solicitações' />
                                <h4>182</h4>
                                <figcaption>Solicitados</figcaption>
                            </figure>
                            <figure className={style.infoFigure}>
                                <img src={NAnalises} className={style.NAnalisesImage} alt="icone de analises" />
                                <h4>74</h4>
                                <figcaption>Em análises</figcaption>
                            </figure>
                            <figure className={style.infoFigure}>
                                <img src={NAprovados} className={style.NAprovadosImage} alt="icone de aprovados" />
                                <h4>195</h4>
                                <figcaption>Aprovados</figcaption>
                            </figure>
                            <figure className={style.infoFigure}>
                                <img src={NRejeitados} className={style.NRejeitadosImage} alt="icone de rejeitados" />
                                <h4>41</h4>
                                <figcaption>Rejeitados</figcaption>
                            </figure>
                        </div>
                        <figure className={`${style.systemStatus}`}  >
                            <img src={sistemaAtualizado} alt="Ícone de nuvem de atualização de sistema" />
                            <figcaption>
                                Sistema atualizado.
                            </figcaption>
                        </figure>
                    </article>
                </section>
            </main>
        </div>
    );
}