import style from './values.module.scss';
import cruz from '../../../assets/Dashboard/cruzVector.png';
import Cancel from '../../../assets/Dashboard/arrowLeftCancel.png';

export default function Values() {
    return (
        <article className={`${style.boxValues}`}>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="ordInt.">Ord Int.</label>
                <input type="text" />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="ordInt.">Div.</label>
                <input type="text" />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="ordInt.">PEP</label>
                <input type="text" />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="ordInt.">Dist. /Km</label>
                <input type="text" />
            </div>
            <div className={`${style.boxWidthMin}`}>
                <label htmlFor="ordInt.">Moeda</label>
                <input type="text" />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="ordInt.">Valor / Km</label>
                <input type="text" />
            </div>
            <div className={`${style.boxWidthMax}`}>
                <label htmlFor="ordInt.">Val. Taxa</label>
                <input type="text" />
            </div>
            <div Main className={`${style.boxWidthMax}`}>
                <label htmlFor="ordInt.">Val. Faturado</label>
                <input type="text" />
            </div>
            <div className={`${style.boxButton}`}>
                <button type='submit' className={`${style.buttonSalvar}`}>
                    <img src={cruz} alt="" />
                    Salvar
                </button>
                <button type='submit' className={`${style.buttonCancelar}`}>
                    <img src={Cancel} alt="" />
                </button>
            </div>
        </article>
    )
}