import {Fragment, useContext, useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";
import TransactionItem from './TransactionItem';

const TransactionList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, []);
    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<TransactionItem key={transaction._id} transaction={transaction}/>))}
            </ul>
        </Fragment>
    )
}

export default TransactionList
