import { useState } from 'react'
import Botao from './Botao'
import Display from './Display'

function Calculadora() {
    const [number, setNumber] = useState(0)
    const [firstNumber, setFirstNumber] = useState(0)
    const [operador, setOperador] = useState("")

    const handleClick = (e) => {
        let novo = (number === 0 ? e.target.value : number + e.target.value)
        setNumber(novo)
    }

    const handleClear = () => {
        setNumber(0)
        setFirstNumber(0)
        setOperador("")
    }

    const handleOperator = (e) => {
        setFirstNumber(number)
        setNumber(0)
        setOperador(e.target.value)
    }

    const handleCalculate = () => {
        switch (operador) {
            case "+": setNumber(parseInt(firstNumber) + parseInt(number))
                break
            case "-": setNumber(parseInt(firstNumber) - parseInt(number))
                break
            case "*": setNumber(parseInt(firstNumber) * parseInt(number))
                break
            case "/": setNumber(parseInt(firstNumber) / parseInt(number))
                break
        }
    }

    return (
        <>
            <Display valor={number} />
            <br />
            <Botao valor={7} handleClick={handleClick} />
            <Botao valor={8} handleClick={handleClick} />
            <Botao valor={9} handleClick={handleClick} />
            <Botao valor={'*'} handleClick={handleOperator} />
            <br />
            <Botao valor={4} handleClick={handleClick} />
            <Botao valor={5} handleClick={handleClick} />
            <Botao valor={6} handleClick={handleClick} />
            <Botao valor={'/'} handleClick={handleOperator} />
            <br />
            <Botao valor={1} handleClick={handleClick} />
            <Botao valor={2} handleClick={handleClick} />
            <Botao valor={3} handleClick={handleClick} />
            <Botao valor={'-'} handleClick={handleOperator} />
            <br />
            <Botao valor={'C'} handleClick={handleClear} />
            <Botao valor={0} handleClick={handleClick} />
            <Botao valor={'='} handleClick={handleCalculate} />
            <Botao valor={'+'} handleClick={handleOperator} />
        </>
    )
}

export default Calculadora