import './TablaPuntos.css';

const TablaPuntos = ({ puntosX, puntosO}) => (
    <div className="score-board">
        <div>{puntosX}</div>
        <div>{puntosO}</div>
    </div>
)

export default TablaPuntos;