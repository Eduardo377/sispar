import style from './analise.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import arrowRight from '../../assets/Dashboard/arrowRight.png';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb.jsx';

export default function Solicitacao() {
    return (

        <div
            className={`${style.body}`}
        >
            <Navbar />

            <main className={style.main}>
                <section>
                <Breadcrumb
                    title1={"Reembolsos"}
                    image={arrowRight}
                    title2={"Análises"}
                />
                </section>
            </main>
        </div>
    )
}