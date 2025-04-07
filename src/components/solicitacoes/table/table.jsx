import style from './table.module.scss';

import bin from '../../../assets/Dashboard/binVentor.png';
import descriptionReason from '../../../assets/Dashboard/descriptionReasonVector.png';

// import  {Modal}  from '../../modal/Modal.jsx';

//     const [showModal, setShowModal] = useState(false);

//     const handleShowModalDelete = () => {
//         setShowModal(true);
//     };

//     const handleConfirm = () => {
//         setShowModal(false);
//     };

//     const handleCancel = () => {
//         setShowModal(false);
//     };

export default function Table() {
    return (
        <article className={`${style.tableWrapper}`}>
            <table className={`${style.tableContainer}`}>
                <thead>
                    <tr className={`${style.tableHead}`}>
                        <th className={`${style.colFirstBox}`}>{" "}</th>
                        <th>Colaborador(a)</th>
                        <th>Empresa</th>
                        <th>Nº Prest.</th>
                        <th>Data</th>
                        <th>Motivo</th>
                        <th>Tipo de despesa</th>
                        <th>Ctr. Custo</th>
                        <th>Ord. Int.</th>
                        <th>Div.</th>
                        <th>PEP</th>
                        <th>Moeda</th>
                        <th>Dist. Km</th>
                        <th>Val. Km</th>
                        <th>Val. Faturado</th>
                        <th>Despesa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={bin} alt="Lixeira para exclusão" />
                        </td>
                        <td>Vitor Carvalho de Souza</td>
                        <td>WSS001</td>
                        <td>329456</td>
                        <td>08/01/2025</td>
                        <td>
                            <img src={descriptionReason} alt="Descrição do motivo" />
                        </td>
                        <td>Desp. de viagem administrativa</td>
                        <td>1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</td>
                        <td>0003</td>
                        <td>002</td>
                        <td>001</td>
                        <td>BRL</td>
                        <td>434Km</td>
                        <td>0.65</td>
                        <td>242.10</td>
                        <td>40.05</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={bin} alt="Lixeira para exclusão" />
                        </td>
                        <td>Vanessa Portugal</td>
                        <td>WSS002</td>
                        <td>987789</td>
                        <td>01/01/2025</td>
                        <td>
                            <img src={descriptionReason} alt="Descrição do motivo" />
                        </td>
                        <td>Desp. de viagem administrativa</td>
                        <td>1100110102 - FIN CONTABILIDADE MTZ</td>
                        <td>0002</td>
                        <td>005</td>
                        <td>001</td>
                        <td>ARS</td>
                        <td>289Km</td>
                        <td>0.37</td>
                        <td>106.93</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={bin} alt="Lixeira para exclusão" />
                        </td>
                        <td>Washington Klinglon</td>
                        <td>WSS003</td>
                        <td>546791</td>
                        <td>03/01/2025</td>
                        <td>
                            <img src={descriptionReason} alt="Descrição do motivo" />
                        </td>
                        <td>Eventos de apresentação</td>
                        <td>1100109002 - FIN CONTROLES INTERNOS MTZ</td>
                        <td>0001</td>
                        <td>005</td>
                        <td>001</td>
                        <td>USD</td>
                        <td>197Km</td>
                        <td>0.75</td>
                        <td>109.75</td>
                        <td>29.97</td>
                    </tr>
                </tbody>
            </table>
        </article>
    )
}