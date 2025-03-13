import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './solicitacao.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';

export default function Solicitacao() {
    return (

        // const [name, setName] = useState('');
        // const [erro, setErro] = useState('');

        // const validarName = (valor) => {
        //     const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
        //     return regex.test(valor);
        // };

        <div
            className={`${style.body}`}
        >
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
                        <div className={`${style.boxInfos}`}>
                            <div className={`${style.boxPrimeiraLinha}`}>
                                <div className={`${style.boxInputName}`}>
                                    <div>
                                        <label htmlFor="name">Nome Completo</label>
                                    </div>
                                    <div>
                                        <input type="text" name="name" id="name"
                                        // value={name} onChange={handleChangeName} 
                                        />
                                    </div>
                                </div>
                                <div className={`${style.boxInputEmpresa}`}>
                                    <div>
                                        <label htmlFor="empresa">Empresa</label>
                                    </div>
                                    <div>
                                        <input type="text" name="empresa" id="empresa"
                                        // value={empresa} onChange={handleChangeName} 
                                        />
                                    </div>
                                </div>
                                <div className={`${style.boxInputNPrestContas}`}>
                                    <div>
                                        <label htmlFor="nPrestContas">Nº Prest. Contas</label>
                                    </div>
                                    <div>
                                        <input type="text" name="nPrestContas" id="nPrestContas"
                                        // value={empresa} onChange={handleChangeName} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.boxTextArea}`}>
                                <div>
                                    <label htmlFor="story">Descrição / Motivo do Reembolso</label>
                                </div>
                                <div className={`${style.textAreaInput}`}>
                                    <textarea className={`${style.textArea}`} type="text" name="story" id="story" rows={2} cols={87}
                                    // value={empresa} onChange={handleChangeName} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`${style.containerRegistro}`}>
                            <div className={`${style.boxDate}`}>
                                <div className={`${style.boxDateInfos}`}>
                                    <div>
                                        <label htmlFor="date">Data</label>
                                    </div>
                                    <div>
                                        <input type="date" name="date" id="date" value="AAAA-MM-DD" min="1900-01-01" max="2300-12-31"
                                        // value={name} onChange={handleChangeName} 
                                        />
                                    </div>
                                </div>
                                <div className={`${style.boxDespesa}`}>
                                    <div>
                                        <label htmlFor="dispesa">Tipo de Despesa</label>
                                    </div>
                                    <div>
                                        <select
                                            htmlFor="dispesa"
                                            name="dispesa"
                                            id={`${style["dispesa"]}`}
                                        >
                                            <option value="selecionar">Selecionar</option>
                                            <option value="alimentacao">Alimentação</option>
                                            <option value="conbustivel">Conbustível</option>
                                            <option value="conducao">Condução</option>
                                            <option value="estacionamento">Estacionamento</option>
                                            <option value="viagemAdmin">Viagem admin.</option>
                                            <option value="viagemOperacional">Viagem Operacional</option>
                                            <option value="eventosDeRepresentacao">Eventos de representação</option>
                                            <select htmlFor="dispesa">Tipo de Despesa</select>
                                        </select>
                                    </div>
                                </div>
                                <div className={`${style.boxCustos}`}>
                                    <div>
                                        <label htmlFor="custos">Controle de Custo</label>
                                    </div>
                                    <div>
                                        <select
                                            htmlFor="custos"
                                            name="custos"
                                            id={`${style["custos"]}`}
                                        >
                                            <option value="selecionar">Selecionar</option>
                                            <option value="1100109002">1100109002 - FIN CONTROÇES INTERNOS MTZ</option>
                                            <option value="1100110002">1100110002 - FIN VICE-RESIDENCIA FINANCASP MTZ</option>
                                            <option value="1100110102">1100110102 - FIN CONTABILIDADE MTZ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.values}`}>
                                <div>

                                    <div>
                                        <div>
                                            <label htmlFor="ordInt.">Ord Int.</label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="ordInt.">PEP</label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="ordInt.">Dist. /Km</label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="ordInt.">Moeda</label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="ordInt.">Valor / Km</label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="ordInt.">Val. Taxa</label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="ordInt.">Val. Faturado</label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type='submit'>
                                        + Salvar
                                    </button>
                                    <button>
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}