import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {

  constructor() { }

  @Input() puntosX=0;
  @Input() puntosO= 0;
  ngOnInit(): void {
  }

}
