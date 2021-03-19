import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initState = {
    transactions: [],
    error: null,
    loading: true
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(AppReducer, initState);

    async function deleteTransaction(id) {
        try{
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({type: 'DELETE_TRANSACTION', payload: id});
        }catch(err){
            dispatch({type: "TRANSACTION_ERROR", payload: err.response.data.error});
        }
       

    }

    async function addTransaction(transaction) {
        try{
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            };
            const res = await axios.post('/api/v1/transactions',transaction,config);
            dispatch({type: 'ADD_TRANSACTION', payload: res.data.data})
        }catch(err){
            dispatch({type: "TRANSACTION_ERROR", payload: err.response.data.error});
        }
        
    }

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({type: 'GET_TRANSACTIONS', payload: res.data.data});
        } catch (err) {
            dispatch({type: "TRANSACTION_ERROR", payload: err.response.data.error});

        }
    }

    return (
        <GlobalContext.Provider
            value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            deleteTransaction,
            addTransaction,
            getTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
