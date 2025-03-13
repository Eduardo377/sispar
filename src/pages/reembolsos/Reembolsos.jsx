import Navbar from '../../components/navbar/Navbar.jsx';
import Card from '../../components/reembolsos/dashboard/cards/Card.jsx';
import Info from '../../components/reembolsos/dashboard/infos/Info.jsx';

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
                            <Info
                                image={NSolicitados}
                                styleClassName={`${style.NSolicitadosImage}`}
                                description="icone de solicitações"
                                info="182"
                                title="Solicitados"
                            />
                            <Info
                                image={NAnalises}
                                styleClassName={`${style.NAnalisesImage}`}
                                description="icone de analises"
                                info="74"
                                title="Em análises"
                            />
                            <Info
                                image={NAprovados}
                                styleClassName={`${style.NAprovadosImage}`}
                                description="icone de aprovados"
                                info="195"
                                title="Aprovados"
                            />
                            <Info
                                image={NRejeitados}
                                styleClassName={`${style.NRejeitadosImage}`}
                                description="icone de rejeitados"
                                info="41"
                                title="Rejeitados"
                            />
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