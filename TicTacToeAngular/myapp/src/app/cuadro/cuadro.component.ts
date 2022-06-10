import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {

  constructor() { }

  @Input() value= 'X' || 'O';

  ngOnInit(): void {
  }

}
