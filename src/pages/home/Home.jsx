import React from 'react';

import style from './home.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import arrowRight from '../../assets/Dashboard/arrowRight.png';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb.jsx';

export default function Home() {
    return (

        <div
            className={`${style.body}`}
        >
            <Navbar />

            <main className={style.main}>
                <section>
                    <Breadcrumb
                        title1={"Home"}
                        image={arrowRight}
                        className={style.hiddenNavegacao}
                    />
                </section>
            </main>
        </div>
    )
}