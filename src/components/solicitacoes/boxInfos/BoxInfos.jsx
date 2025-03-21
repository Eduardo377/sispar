import style from './boxInfos.module.scss';

export default function BoxInfos() {

    return (
        <article className={`${style.boxInfos}`}>
            <div className={`${style.boxPrimeiraLinha}`}>
                <div className={`${style.boxInputName}`}>
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className={`${style.boxInputEmpresa}`}>
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" name="empresa" id="empresa" />
                </div>
                <div className={`${style.boxInputNPrestContas}`}>
                    <label htmlFor="nPrestContas">Nº Prest. Contas</label>
                    <input type="text" name="nPrestContas" id="nPrestContas" />
                </div>
            </div>
            <div className={`${style.boxTextArea}`}>
                <label htmlFor="story">Descrição / Motivo do Reembolso</label>
                <textarea className={`${style.textArea}`} type="text" name="story" id="story" rows={2} cols={87} />
            </div>
        </article>
    )
}