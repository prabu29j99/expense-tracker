import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const TransactionItem = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount>0 ? "+" : "-";


    return (
        <li className={sign==='+' ? "plus": "minus"}>
            {transaction.text}
            <span>{sign}Rs {Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick = {()=>deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}

export default TransactionItem
