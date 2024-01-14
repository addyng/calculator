import { useState } from "react";
import "./styles.css";

let num1 = "0";
let num2 = "0";
let operator = "";
// let total = 0;

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
    const [displayValue, setCurrent] = useState("0");
    const operatorList = ["+", "-", "%", "/", "*"];

    const updateDisplay = (val) => {
        if (num1 === "0" && operator === '') {
            num1 = val;
            setCurrent(num1);
        }
        else if (num1 != "0" && operator === '') {
            num1 = num1 + val;
            setCurrent(num1);
        }
        // if (operatorList.includes(val) && operator === '') {
        //     setCurrent(val);
        // }
    }

    return (
        <div id="root">
            <div id="header">Calculator</div>

            <div id="center">
                <div id="calculator">
                    <div id="display">{displayValue}</div>
                    <div id="buttons">
                        <div id="first">
                            <button id="clearAll">AC</button>
                            <button id="sign">+/-</button>
                            <button id="modulo" value="%" onClick={() => updateDisplay("%")}>%</button>
                            <button id="divide" value="/" onClick={() => updateDisplay("/")}>/</button>
                        </div>
                        <div id="second">
                            <button id="seven" value="7" onClick={() => updateDisplay("7")}>7</button>
                            <button id="eight" value="8" onClick={() => updateDisplay("8")}>8</button>
                            <button id="nine" value="9" onClick={() => updateDisplay("9")}>9</button>
                            <button id="multiply" value="*" onClick={() => updateDisplay("*")}>*</button>
                        </div>
                        <div id="third">
                            <button id="four" value="4" onClick={() => updateDisplay("4")}>4</button>
                            <button id="five" value="5" onClick={() => updateDisplay("5")}>5</button>
                            <button id="six" value="6" onClick={() => updateDisplay("6")}>6</button>
                            <button id="subtract" value="-" onClick={() => updateDisplay("-")}>-</button>
                        </div>
                        <div id="fourth">
                            <button id="one" value="1" onClick={() => updateDisplay("1")}>1</button>
                            <button id="two" value="2" onClick={() => updateDisplay("2")}>2</button>
                            <button id="three" value="3" onClick={() => updateDisplay("3")}>3</button>
                            <button id="add" value="+" onClick={() => updateDisplay("+")}>+</button>
                        </div>
                        <div id="fifth">
                            <button id="zero" value="0" onClick={() => updateDisplay("0")}>0</button>
                            <button id="dot" value="." onClick={() => updateDisplay(".")}>.</button>
                            <button id="equal">=</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">Created by addyng</div>
        </div>
    );
}
