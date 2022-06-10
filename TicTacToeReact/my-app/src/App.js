import { useState } from 'react';
import './App.css';
import TablaPuntos from './components/TablaPuntuacion/TablaPuntos';
import Tablero from './components/Tablero/Tablero';

const posiblesGanes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {

  const [turno, setTurno] = useState('X');
  const [cuadros, setCuadros] = useState(Array(9).fill(null));
  const [puntos, setPuntos] = useState({
    X: 0,
    O: 0,
  });
  const [cuadrosGan, setCuadrosGan] = useState([]);


  const reiniciar = () => {
    setTurno('X');
    setCuadros(Array(9).fill(null));
    setCuadrosGan([]);
  }

  const checkGanador = cuadro => {
    for (let i = 0; i < posiblesGanes.length; i++) {
      const [a, b, c] = posiblesGanes[i];
      if (cuadro[a] && cuadro[a] === cuadro[b] && cuadro[a] === cuadro[c]) {
        endGame(cuadro[a], posiblesGanes[i]);
        return
      }
    }

    if (!cuadro.includes(null)) {
      endGame(null, Array.from(Array(10).keys()));
      return
    }
    setTurno(turno === 'X' ? 'O' : 'X');
  }

  const endGame = (result, posiblesGanes) => {
    setTurno(null);
    if (result !== null) {
      setPuntos({
        ...puntos,
        [result]: puntos[result] + 1,
      })
    }
    setCuadrosGan(posiblesGanes);
    setTimeout(reiniciar, 2000);
  }

  const handleClick = cuadro => {
    let aux = [...cuadros];
    aux.splice(cuadro, 1, turno);
    setCuadros(aux);
    checkGanador(aux);
  }

  return (
    <>

      <div className="container">
        <h1 className='text'>Tic Tac Tooe (React)</h1>
        <h1 className='text'>Turno: {turno}</h1>
        <button className='boton' onClick={() => reiniciar()}>Reiniciar</button><br/><br/>
        <Tablero cuadrosGan={cuadrosGan} turno={turno} cuadros={cuadros} onClick={handleClick} />
        <TablaPuntos puntosX={puntos.X} puntosO={puntos.O} />
      </div>
    </>
  );
}

export default App;
