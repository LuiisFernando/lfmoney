import { Summary } from '../Summary/index.';
import { TransactionTable } from '../TransactionTable';

import * as Styled from './styles';

export function Dashboard() {
    return (
        <Styled.Container>
            <Summary />
            <TransactionTable />
        </Styled.Container>
    )
}