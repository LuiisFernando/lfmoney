import { useEffect } from 'react';
import { api } from '../../services/api';
import * as Styled from './styles';

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Styled.Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className='withdraw'>-R$2.0000</td>
                        <td>casa</td>
                        <td>16/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento pessoal</td>
                        <td className='deposit'>R$12.0000</td>
                        <td>pessoal</td>
                        <td>09/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento pessoal</td>
                        <td>R$12.0000</td>
                        <td>pessoal</td>
                        <td>09/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento pessoal</td>
                        <td>R$12.0000</td>
                        <td>pessoal</td>
                        <td>09/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Styled.Container>
    );
}