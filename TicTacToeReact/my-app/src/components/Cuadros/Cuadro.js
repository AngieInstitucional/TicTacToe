import classNames from 'classnames';
import './Cuadro.css'

const Cuadro = ({ value, onClick, turno, gano }) => {

    const handleClick = () => {
        (value === null && turno !== null) && onClick();
    }

    let cuadroClass = classNames({
        cuadro: true,
        [`cuadro${value}`]: value !== null,
        gano: gano,
    })

    return (
        <div className={cuadroClass} onClick={() => handleClick()}>
        </div>
    )
}

export default Cuadro;