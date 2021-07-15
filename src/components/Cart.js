// font-family: 'Roboto', sans-serif;
import React, {createContext, useEffect, useReducer} from 'react'
import "./Cart.css"
import ContextCart from "./ContextCart"
import {data} from "./data"
import {reducer} from "./reducer"


export const CartContext = createContext();

const initialState = {
    item:data,
    totalItems: 8,
    totalAmount: 2760,
    normalDiscount: 100,
    typeDiscount: 82.5,
    orderTotal: 2446
}

function Cart() {

    const [state, dispatch] = useReducer(reducer, initialState, () => {
        return localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : initialState
    })

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload:id,
        })
    }

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    }
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    }

    useEffect(() => {
        dispatch({ type: "GET_TOTAL"});
    }, [state.item]);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(state))
    })
    
    return (
        <CartContext.Provider value={{ ...state, removeItem, increment, decrement}}>
            <ContextCart />
        </CartContext.Provider>
    )
}

export default Cart
