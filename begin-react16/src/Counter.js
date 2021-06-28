import React, { useReducer } from 'react';

// reducer함수 만들기
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {

    const [ number, dispatch ] = useReducer(reducer, 0);  // reducer함수 , 0은 초기상태

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    };

    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {onIncrease}>+1</button>
            <button onClick = {onDecrease}>-1</button>
        </div>
    )
}

export default Counter;