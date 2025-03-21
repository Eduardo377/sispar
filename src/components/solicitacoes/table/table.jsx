import style from './table.module.scss';

import bin from '../../../assets/Dashboard/bin.png';
import descriptionReason from '../../../assets/Dashboard/descriptionReason.png';

export default function Table() {
    return (
        <table className={`${style.tableContainer}`}>
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
            <tr>
                <td>
                    <img src={bin} alt="Lixeira para exclusão" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    )
}