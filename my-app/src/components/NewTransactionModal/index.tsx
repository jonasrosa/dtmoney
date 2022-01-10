import { FormEvent, useState } from "react";
import {api} from "../../services/api"
import Modal from "react-modal";
import { Container,TransactionTypeContainer,RadioBox } from "./styles";
import closeImg from '../../assets/close.svg' 
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg' 
import { colors } from "../../styles/tokey/colors";
import { useContext } from "react";
import {useTransactions} from '../../context/TransactionContext'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
const{createTransaction}  = useTransactions()
const [title, setTitle]= useState('');
const [amount, setAmount]= useState(0)
const [category, setCategoria]= useState('')
const [type,setType]=useState('deposit')

async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
    
    await createTransaction({
      title,
      type,
      amount,
      category,
      
    })

   onRequestClose()

   setTitle('')
   setAmount(0)
   setCategoria('')
   setType('deposit')

}
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
      <Container onSubmit={handleCreateNewTransaction}>
      <h2>cadastrar transação</h2>
          <input
            placeholder="Titulo"
            value={title}
            onChange={event=> setTitle(event.target.value)}
          />
          
          <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={event=> setAmount(Number(event.target.value))}
          />

        <TransactionTypeContainer>
            <RadioBox
                type="button"
                onClick={()=>{setType('deposit')}} 
                isActive={type==="deposit"} 
                activeColor={colors.green}

            >
                <img src={incomeImg} alt='Entrada'/>
                <span>Entrada</span>
            </RadioBox>
            <RadioBox
             type="button"
             onClick={()=>{setType('withdraw')}} 
             isActive={type==="withdraw"} 
             activeColor={colors.red}
            
            >
                <img src={outcomeImg} alt="Saída"/>
                <span>Saída</span>
            </RadioBox>
           


        </TransactionTypeContainer>


         <input
            placeholder="Categoria"
            value={category}
            onChange={event=> setCategoria(event.target.value)}
          />
          
          <button type="submit">
              Cadastrar
          </button>
      </Container>

    </Modal>
  );
}

Modal.setAppElement("#root");
