import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../features/counterSlice'
// import styles from './Counter.module.css'
import { increaseCounter } from '../app/actions/counterActions'

const Counter = () => {
    const count = useSelector((store) => store.counterReducer.count)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increaseCounter(1))}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(increaseCounter(-1))}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter