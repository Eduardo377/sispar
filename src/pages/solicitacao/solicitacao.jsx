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
                                    <textarea className={`${style.textArea}`} type="text" name="story" id="story" rows={5} cols={33}
                                    // value={empresa} onChange={handleChangeName} 
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}