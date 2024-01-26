import React, { Component } from "react";
// reference: https://codesandbox.io/p/sandbox/analog-clock-using-react-idkpz?file=%2Fsrc%2FClock.js

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="clock bg-white rounded-full sticky top-0">
                <div>
                    {/* <HorizontalCarouselScroll /> */}
                </div>
                <div
                    id="hour_hand"
                    className="bg-gray-800 w-[6px] h-[60px] absolute top-[30%] left-[49%] origin-bottom"
                    style={{
                        transform: `rotateZ(${this.state.time.getHours() * 30 + 15}deg)`
                    }}
                />
                <div
                    id="min_hand"
                    className="absolute w-[4px] h-[80px] bg-[#444] top-[22.5%] left-[49%] origin-bottom"
                    style={{
                        transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    id="sec_hand"
                    className="absolute w-[2px] h-[118px] bg-red-500 top-[10.5%] left-1/2 origin-bottom"
                    style={{
                        transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
                    }}
                />
                <span className="twelve top-[10px] left-[46%]">12</span>
                <span className="one top-[10%] right-[26%]">1</span>
                <span className="two top-[25%] right-[10%]">2</span>
                <span className="three top-[46%] right-[10px]">3</span>
                <span className="four top-[67%] right-[30px]">4</span>
                <span className="five right-[78px] top-[80%]">5</span>
                <span className="six bottom-[10px] left-1/2">6</span>
                <span className="seven top-[82%] left-[80px]">7</span>
                <span className="eight top-[67%] left-[30px]">8</span>
                <span className="nine top-[46%] left-[10px]">9</span>
                <span className="ten top-1/4 left-[10%]">10</span>
                <span className="eleven top-[10%] left-[26%]">11</span>
            </div>
        );
    }
}
