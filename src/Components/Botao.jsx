function Botao({ valor, handleClick }) {
    return (
        <button className="calculadora-botao" onClick={handleClick} value={valor}>{valor}</button>
    )
}

export default Botao