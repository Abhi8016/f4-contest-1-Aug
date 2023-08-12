import React, { useState } from "react";


const Cal = () => {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [cal, setCal] = useState(0);

    function add() {
        setCal(+num1 + +num2);
    }
    function sub() {
        setCal(+num1 - +num2);
    }
    function multi() {
        setCal(+num1 * +num2)
    }
    function div() {
        setCal(+num1 / +num2)
    }
    return (
        <div className="outer-box">
            <div className="container">
                <h2>React Calculator</h2>
                <div>
                    <input type="text" placeholder="Enter 1st Number"
                        onChange={(event) => { setNum1(event.target.value) }}
                    />
                </div>
                <input type="text" placeholder="Enter 2nd Number"
                    onChange={(event) => { setNum2(event.target.value) }}
                />
                <div className="btn">
                    <button onClick={add}>+</button>
                    <button onClick={sub}>-</button>
                    <button onClick={multi}>*</button>
                    <button onClick={div}>/</button>
                </div>
                <h1>{cal}</h1>
            </div>
        </div>
    )



}

export default Cal;