import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra_sup-componente',
  templateUrl: './barra_sup-componente.component.html',
  styleUrls: ['./barra_sup-componente.component.css']
})
export class Barra_supComponenteComponent implements OnInit {
  titulo_izq="CONDOSA";
  texto_medio="Generar recibos de mantenimiento";

  constructor() { }

  ngOnInit() {
  }

}
