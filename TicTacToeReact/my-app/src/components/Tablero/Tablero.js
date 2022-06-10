import Cuadro from "../Cuadros/Cuadro"
import './Tablero.css';


const Tablero = ({ cuadros, onClick, turno, cuadrosGan }) => {

    const createSquares = values => (
        values.map( value => (
            <Cuadro
                gano = {cuadrosGan.includes(value)}
                turno={turno}
                onClick={() => onClick(value)}
                value={cuadros[value]}
                key={`square_${value}`}
            />
        ))
    );

    return (
        <div className="board">
            <div className="row">
               {createSquares([0,1,2])}
            </div>
            <div className="row">
                {createSquares([3,4,5])}
            </div>
            <div className="row">
                {createSquares([6,7,8])}
            </div>
        </div>
    );
}

export default Tablero;