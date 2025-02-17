import React, {useState} from 'react';
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
                            <div>
                                <label htmlFor="name">Nome Completo</label>
                                <input type="text" name="naem" id="name" value={name} onChange={handleChangeName} />
                            </div>
                            <div></div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}