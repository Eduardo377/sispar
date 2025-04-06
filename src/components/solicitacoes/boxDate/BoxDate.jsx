import style from './boxDate.module.scss';

import calendarIcon from '../../../assets/solicitacao/calendar-icon.png';
import arrowDown from '../../../assets/solicitacao/arrowDown.png';

export default function BoxDate() {
    return (
        <div className={`${style.boxDate}`}>
            <div className={`${style.boxDateInfos} ${style.box}`}>
                <label htmlFor="date">Data</label>
                <div className={`${style.boxTransparentInput} `}>
                    <input type="date" name="date" className={`${style.transparentInput}${style.date}`} value="AAAA-MM-DD" min="1900-01-01" max="2300-12-31"
                    />
                    <button type="button" className={`${style.transparentInputButton}`}>
                        <img src={calendarIcon} alt="calendario" />
                    </button>
                </div>
            </div>
            <div className={`${style.boxDespesa}`}>
                <div className={`${style.box}`}>
                    <label htmlFor="despesa">Tipo de Despesa</label>
                    <div className={`${style.boxTransparentInput}`}>
                        <select
                            htmlFor="despesa"
                            name="despesa"
                            className={`${style.despesa} ${style.transparentInput}`}
                        >
                            <option value="selecionar" className={`${style.despesa}`}
                            >Selecionar</option>
                            <option value="alimentacao" className={`${style.despesa}`}
                            >Alimentação</option>
                            <option value="conbustivel" className={`${style.despesa}`}
                            >Conbustível</option>
                            <option value="conducao" className={`${style.despesa}`}
                            >Condução</option>
                            <option value="estacionamento" className={`${style.despesa}`}
                            >Estacionamento</option>
                            <option value="viagemAdmin" className={`${style.despesa}`}
                            >Viagem admin.</option>
                            <option value="viagemOperacional" className={`${style.despesa}`}
                            >Viagem Operacional</option>
                            <option value="eventosDeRepresentacao" className={`${style.despesa}`}
                            >Eventos de representação</option>
                        </select>
                        <button type="button" className={`${style.transparentInputButton} ${style.buttonSelectDespesa}`}>
                            <img src={arrowDown} alt="seta para baixo" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${style.boxCustos}`}>
                <div className={`${style.box}`}>
                    <label htmlFor="custos">Controle de Custo</label>
                    <div className={`${style.boxTransparentInput}`}>
                        <select
                            htmlFor="custos"
                            name="custos"
                            className={`${style.custos}`}
                        >
                            <option value="selecionar" className={`${style.custos}`}
                            >Selecionar</option>
                            <option value="1100109002" className={`${style.custos}`}
                            >1100109002 - FIN CONTROÇES INTERNOS MTZ</option>
                            <option value="1100110002" className={`${style.custos}`}
                            >1100110002 - FIN VICE-RESIDENCIA FINANCASP MTZ</option>
                            <option value="1100110102" className={`${style.custos}`}
                            >1100110102 - FIN CONTABILIDADE MTZ</option>
                        </select>
                        <button type="button" className={`${style.transparentInputButton} ${style.buttonSelectCustos}`}>
                            <img src={arrowDown} alt="seta para baixo" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}