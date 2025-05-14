/* eslint-disable react/prop-types */
import style from './boxDate.module.scss';

import calendarIcon from '../../../assets/solicitacao/calendar-icon.png';
import arrowDown from '../../../assets/solicitacao/arrowDown.png';

export default function BoxDate({ formData, onInputChange, onSelectChange }) {
    return (
        <div className={`${style.boxDate}`}>
            <div className={`${style.boxDateInfos} ${style.box}`}>
                <label htmlFor="date" >Data</label>
                <div className={`${style.boxTransparentInput} `}>
                    <input
                        type="date"
                        name="date"
                        className={`${style.transparentInput}${style.date}`}
                        min="1900-01-01"
                        max="2300-12-31"
                        value={formData.date}
                        onChange={onInputChange}
                    />
                    <button
                        type="button"
                        className={style.transparentInputButton}
                        aria-label="Abrir calendário"
                        onClick={() => document.querySelector('input[name="date"]').showPicker()}
                    >
                        <img src={calendarIcon} alt="Ícone de calendário" />
                    </button>

                </div>
            </div>
            <div className={`${style.boxDespesa}`}>
                <div className={`${style.box}`}>
                    <label htmlFor="expense_type">Tipo de Despesa</label>
                    <div className={`${style.boxTransparentInput}`}>
                        <select
                            className={`${style.despesa} ${style.transparentInput}`}
                            id="expense_type"
                            name="expense_type"
                            value={formData.expense_type}
                            onChange={(e) => onSelectChange('expense_type', e.target.value)}
                        >
                            <option value="Selecionar" className={`${style.despesa}`}
                            >Selecionar</option>
                            <option value="Alimentacao" className={`${style.despesa}`}
                            >Alimentação</option>
                            <option value="Combustivel" className={`${style.despesa}`}
                            >Combustível</option>
                            <option value="conducao" className={`${style.despesa}`}
                            >Condução</option>
                            <option value="estacionamento" className={`${style.despesa}`}
                            >Estacionamento</option>
                            <option value="Viagem Admin" className={`${style.despesa}`}
                            >Viagem admin.</option>
                            <option value="Viagem Operacional" className={`${style.despesa}`}
                            >Viagem Operacional</option>
                            <option value="Eventos de Representacao" className={`${style.despesa}`}
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
                    <label htmlFor="custos" name="custos" >Controle de Custo</label>
                    <div className={`${style.boxTransparentInput}`}>
                        <select
                            className={`${style.custos}`}
                            id="cost_center"
                            name="cost_center"
                            value={formData.cost_center}
                            onChange={(e) => onSelectChange('cost_center', e.target.value)}
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