import React, { Component } from 'react';

class Counter extends Component {

    /* constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    } */

    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        }
    }

    // 화살표 함수
    handleIncrease = () => {
        console.log('increase');
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleDecrease = () => {
        console.log('decrease');
        this.setState({
            counter: this.state.counter - 1
        })
    }

    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe,
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;