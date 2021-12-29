import Modal from "react-modal";
import { Container,TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg' 
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg' 
import { useState } from "react";




interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

const [type,setType]=useState()
  return (
    <Modal 
    isOpen={isOpen}
     onRequestClose={onRequestClose}
     overlayClassName="react-modal-overlay"
     className="react-modal-content"
     
     >
         <button type="button"
            onClick={onRequestClose}
            className="react-modal-close">

            <img src={closeImg} alt="Fechar modal"/>
         </button>
      <Container>
      <h2>cadastrar transação</h2>
          <input
            placeholder="Titulo"
          />
          
          <input 
          type="number" 
          placeholder="Valor"/>

        <TransactionTypeContainer>
            <button>
                <img src={incomeImg} alt='Entrada'/>
                <span>Entrada</span>
            </button>
            <button>
                <img src={outcomeImg} alt="Saída"/>
                <span>Saída</span>
            </button>
           


        </TransactionTypeContainer>


         <input
            placeholder="Categoria"
          />
          
          <button type="submit">
              Cadastrar
          </button>
      </Container>

    </Modal>
  );
}

Modal.setAppElement("#root");
