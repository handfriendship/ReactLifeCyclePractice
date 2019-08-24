import React from 'react';

class Clock extends React.Component {

    state = {
        hours: '',
        minutes: '',
        seconds: '',
        timeOfDay: '',
        clockref: ''
    }

    numToDay = [
        '일', '월', '화', '수', '목', '금', '토'
    ]

    componentDidMount = () => {
        const ref = setInterval(() => {
            const timer = new Date();
            console.log("timer : ", timer);
            this.setState({
                hours: timer.getHours(),
                minutes: timer.getMinutes(),
                seconds: timer.getSeconds(),
                timeOfDay: this.numToDay[timer.getDay()],
                clockref: ref
            });
        }, 1000)
    }

    
    unmountComponentAtNode = () => {
        console.log("unmountComponentAtNode() called!");
        //const dummyRef = this.state.ref;
        this.setState(
            this.state.clockref.clearInterval
        )
    }
    

    render() {
        const {hours, minutes, seconds, timeOfDay, clockref} = this.state;
        
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>
                <button onClick={this.unmountComponentAtNode}>닫기</button>
            </div>
        );
    }
}

export default Clock;