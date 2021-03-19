import {Fragment, useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuidv4 } from 'uuid';
const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
    const [text,
        setText] = useState("");
    const [amount,
        setAmount] = useState(0);


    const onSubmit = e =>{
        e.preventDefault();
        const newTransaction = {
            id:uuidv4(),
            text,
            amount:parseInt(amount) 

        }
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        placeholder="Enter text..."
                        type="text"
                        value={text}
                        onChange=
                        {(e)=>setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount
                        <br/>
                        (negative - expense, positive - income)</label >
                    <input
                        type="number"
                        value={amount}
                        onChange=
                        {(e)=> setAmount(e.target.value)}
                        placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    )
}

export default AddTransaction
