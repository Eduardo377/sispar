import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
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
                        <h2>
                            Sistema de Reembolsos
                        </h2>
                        <p>
                            Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.
                        </p>
                        <div className={`${style.boxButton}`}>
                            <button onClick={handleSolicitacao}>
                                <img src={solicitarReeembolso} alt="" />
                                Solicitar Reembolso
                            </button>
                            <button>
                                <img src={solicitarAnalise} alt="" />
                                Verificar análises
                            </button>
                            <button>
                                <img src={solicitarHistorico} alt="" />
                                Histórico
                            </button>
                        </div>
                        <div>
                            <figure>
                                <img src={`${NSolicitados}`} alt="" />
                                <figcaption>
                                    <b>
                                        182
                                    </b>
                                        Solicitados
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={`${NAnalises}`} alt="" />
                                <figcaption>
                                    <b>
                                        74
                                    </b>
                                        Em análise
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={`${NAprovados}`} alt="" />
                                <figcaption>
                                    <b>
                                        195
                                    </b>
                                        Aprovados
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={`${NRejeitados}`} alt="" />
                                <figcaption>
                                    <b>
                                        41
                                    </b>
                                        Rejeitados
                                </figcaption>
                            </figure>
                        </div>
                        <figure>
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