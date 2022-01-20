import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';

import * as Styled from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {

    return (
        <Styled.Container>
            <Styled.Content>
                <img src={logoImg} alt="lf-money" />
                <button onClick={props.onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Styled.Content>
        </Styled.Container>
    )
}