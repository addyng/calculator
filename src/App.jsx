// import { useState } from 'react'
import "./styles.css";

let num1 = 0;
let num2 = 0;
let operator = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return;
    }
}

export default function App() {
    return (
        <div id="root">
            <div id="header">Calculator</div>

            <div id="center">
                <div id="calculator">
                    <div id="display">0</div>
                    <div id="buttons">
                        <div id="first">
                            <button id="clearAll">AC</button>
                            <button id="sign">+/-</button>
                            <button id="modulo">%</button>
                            <button id="divide">/</button>
                        </div>
                        <div id="second">
                            <button id="7">7</button>
                            <button id="8">8</button>
                            <button id="9">9</button>
                            <button id="multiply">*</button>
                        </div>
                        <div id="third">
                            <button id="4">4</button>
                            <button id="5">5</button>
                            <button id="6">6</button>
                            <button id="subtract">-</button>
                        </div>
                        <div id="fourth">
                            <button id="1">1</button>
                            <button id="2">2</button>
                            <button id="3">3</button>
                            <button id="add">+</button>
                        </div>
                        <div id="fifth">
                            <button id="zero">0</button>
                            <button id="dot">.</button>
                            <button id="equal">=</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">Created by addyng</div>
        </div>
    );
}
