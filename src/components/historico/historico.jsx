import style from './historico.module.scss';
import Navbar from '../navbar/Navbar.jsx';

export default function Historico() {
    return (
        <div
            className={`${style.body}`}
        >
            <Navbar />
            <main
                className={`${style.main}`}
            >

                <h1>Historico</h1>
            </main>
        </div>
    );
}