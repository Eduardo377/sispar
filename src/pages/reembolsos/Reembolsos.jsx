import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import style from './reembolsos.module.scss';
import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';
import solicitarReeembolso from '../../assets/Dashboard/solicitarReembolso.png';
import solicitarAnalise from '../../assets/Dashboard/solicitarAnálises.png';
import solicitarHistorico from '../../assets/Dashboard/solicitarHistórico.png';
import NSolicitados from '../../assets/Dashboard/N-Solicitados.png';
import NAnalises from '../../assets/Dashboard/N-Análises.png';
import NAprovados from '../../assets/Dashboard/N-Aprovados.png';
import NRejeitados from '../../assets/Dashboard/N-Rejeitados.png';
import sistemaAtualizado from '../../assets/Dashboard/sistemaAtualizado.png';

export default function Reembolsos() {
    const navigate = useNavigate();

    const handleSolicitacao = () => {
        navigate('/solicitacao');
    };

    return (
        <div className={style.body}>
            <Navbar />
            <main className={style.main}>
                <span>
                    <img src={vectorHomeIndice} alt="" />
                    <img src={arrowRight} alt="" />
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
                        <div className={`${style.boxCards}`}>
                            <div className={`${style.card}`} onClick={handleSolicitacao}>
                                <img src={solicitarReeembolso} alt="" />
                                Solicitar Reembolso
                            </div>
                            <div className={`${style.card}`}>
                                <img src={solicitarAnalise} alt="" />
                                Verificar análises
                            </div>
                            <div className={`${style.card}`}>
                                <img src={solicitarHistorico} alt="" />
                                Histórico
                            </div>
                        </div>
                        <div className={`${style.boxInfos}`}>
                            <figure>
                                <img src={`${NSolicitados}`} className={`${style.NSolicitadosImage}`} alt="" />
                                <h4>
                                    182
                                </h4>
                                <figcaption>
                                    Solicitados
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={`${NAnalises}`} className={`${style.NAnalisesImage}`} alt="" />
                                <h4>
                                    74
                                </h4>
                                <figcaption>
                                    Em análise
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={`${NAprovados}`} className={`${style.NAprovadosImage}`} alt="" />
                                <h4>
                                    195
                                </h4>
                                <figcaption>
                                    Aprovados
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={`${NRejeitados}`} className={`${style.NRejeitadosImage}`} alt="" />
                                <h4>
                                    41
                                </h4>
                                <figcaption>
                                    Rejeitados
                                </figcaption>
                            </figure>
                        </div>
                        <figure className={`${style.boxFinal}`}  >
                            <img src={`${sistemaAtualizado}`} alt="" />
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