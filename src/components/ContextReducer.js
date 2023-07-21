import React, { createContext, useContext, useReducer } from 'react'
const cartStateContext = createContext();
const cartDispatchContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "UPDATE":
            let arr = [...state]
            arr.find((games, index) => {
                if (games.id === action.id) {
                    console.log(games.qty, parseInt(action.qty), action.price + games.price)
                    arr[index] = { ...games, qty: parseInt(action.qty) + games.qty, price: action.price + games.price }

                }
                return arr;
            })
            return arr;
        case "DROP":
            let emptyarr = []
            return emptyarr;
        default:
            console.log("Error in reducer");
    }
}
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);