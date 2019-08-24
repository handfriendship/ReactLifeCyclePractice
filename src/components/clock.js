import React from 'react';
import { getClockTime } from './lib'

class Clock extends React.Component {

    constructor() {
        super()
        this.state = getClockTime()
    }

    componentDidMount() {
        console.log("componentDidMount() called!");
        
        this.ticking = setInterval(() =>
                this.setState(getClockTime())
            , 1000)
    }

    componentWillUnmount() {
        console.log("componentwillUnmount() called!");
        clearInterval(this.ticking)
        
    }

    render() {
        console.log("render() called!");
        const { hours, minutes, seconds, timeOfDay } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }

}

export default Clock;