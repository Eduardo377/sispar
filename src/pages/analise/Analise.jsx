import style from './analise.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';

export default function Analise() {
    return (
        <div
            className={`${style.body}`}
        >
            <Navbar />
            <main
                className={`${style.main}`}
            >

                <h1>Analise</h1>
            </main>
        </div>
    );
}