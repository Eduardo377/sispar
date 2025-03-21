import style from './boxDate.module.scss';

export default function BoxDate() {
    return (
        <div className={`${style.boxDate}`}>
            <div className={`${style.boxDateInfos}`}>
                <div>
                    <label htmlFor="date">Data</label>
                    <input type="date" name="date" className={`${style.date}`} value="AAAA-MM-DD" min="1900-01-01" max="2300-12-31"
                    />
                </div>
            </div>
            <div className={`${style.boxDespesa}`}>
                <div>
                    <label htmlFor="dispesa">Tipo de Despesa</label>
                    <select
                        htmlFor="despesa"
                        name="despesa"
                        className={`${style.despesa}`}
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
                </div>
            </div>
            <div className={`${style.boxCustos}`}>
                <div>
                    <label htmlFor="custos">Controle de Custo</label>
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
                </div>
            </div>
        </div>
    )
}