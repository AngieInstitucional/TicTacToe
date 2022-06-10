import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  public squares: string[]= Array(9).fill(null);
  xIsNext: boolean = true;
  puntosX = 0
  puntosO= 0
  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.xIsNext = true;
    this.squares = Array(9).fill(null);

  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.calculateWinner();
  }

  endGame(square:string){
    this.xIsNext = true;
    if(square!==null){
      square === 'X' ? (this.puntosX+= 1) :  (this.puntosO += 1) 
    }
    setTimeout(()=>this.newGame(),1000)
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.endGame(this.squares[a]);
      }
    }
  }

}
