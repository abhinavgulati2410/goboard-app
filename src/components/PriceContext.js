import React, { createContext, useContext, useReducer } from 'react'
const priceStateContext = createContext();
const priceDispatchContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "SETTOTAL":
            return state = action.price


        default:
            console.log("Error in reducer");
    }
}
export const PriceProvider = ({ children }) => {
    const [state, dispatch2] = useReducer(reducer, "")
    return (
        <priceDispatchContext.Provider value={dispatch2}>
            <priceStateContext.Provider value={state}>
                {children}
            </priceStateContext.Provider>
        </priceDispatchContext.Provider>
    )
}

export const usePrice = () => useContext(priceStateContext);
export const useDispatchPrice = () => useContext(priceDispatchContext);