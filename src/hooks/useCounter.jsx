import { useState } from "react"

export const useCounter = (initialState) => {

const[counter, setCounter] = useState(initialState)

const reset = () => {
    setCounter(initialState)
}

const increment = () => {
    setCounter(prev => prev + 1)
}
const decrement = () => {
    setCounter(prev => prev - 1)
}


    return (
        counter,
        increment,
        decrement,
        reset
    )
}

