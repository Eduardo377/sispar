import style from './solicitacao.module.scss';
import Navbar from '../navbar/Navbar.jsx';

export default function solicitacao() {
    return (
        <div
            className={`${style.body}`}
        >
            <Navbar />
            <main
                className={`${style.main}`}
            >

                <h1>Solitação</h1>
            </main>
        </div>
    )
}