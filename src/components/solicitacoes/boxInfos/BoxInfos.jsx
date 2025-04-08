import style from './boxInfos.module.scss';

export default function BoxInfos({ formData, onInputChange }) {

    return (
        <article className={`${style.boxInfos}`}>
            <div className={`${style.boxPrimeiraLinha}`}>
                <div className={`${style.boxInputName}`}>
                    <label htmlFor="name">Nome Completo</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={onInputChange}
                    />
                </div>
                <div className={`${style.boxInputEmpresa}`}>
                    <label htmlFor="empresa">Empresa</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={onInputChange}
                    />
                </div>
                <div className={`${style.boxInputNPrestContas}`}>
                    <label htmlFor="nPrestContas">Nº Prest. Contas</label>
                    <input
                        type="number"
                        name="account"
                        id="account"
                        value={formData.account}
                        onChange={onInputChange}
                    />
                </div>
            </div>
            <div className={`${style.boxTextArea}`}>
                <label htmlFor="story">Descrição / Motivo do Reembolso</label>
                <textarea
                    className={`${style.textArea}`}
                    name="description"
                    id="story"
                    rows={2}
                    cols={87}
                    value={formData.description}
                    onChange={onInputChange}
                />
            </div>
        </article>
    )
}