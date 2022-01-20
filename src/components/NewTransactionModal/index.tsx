import { useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import * as Styled from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                className="react-modal-close"
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="fechar-modal" />
            </button>

            <Styled.Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Título'
                />

                <input
                    type="number"
                    placeholder='Valor'
                />

                <Styled.TransactionTypeContainer>
                    <Styled.RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </Styled.RadioBox>
                    <Styled.RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saída</span>
                    </Styled.RadioBox>
                </Styled.TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Styled.Container>
        </Modal >
    )
}