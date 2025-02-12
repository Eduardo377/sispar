import style from './solicitacao.module.scss';
import Navbar from '../navbar/Navbar.jsx';

export default function Solicitacao() {
    return (
        <div
            className={`${style.body}`}
        >
            <Navbar />
            <main
                className={`${style.main}`}
            >

                <h1>Solitação</h1>
                <p>
                    para de me trollar git
                </p>
            </main>
        </div>
    )
}