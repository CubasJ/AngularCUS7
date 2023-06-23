import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-principal',
  templateUrl: './tabla-principal.component.html',
  styleUrls: ['./tabla-principal.component.css']
})
export class TablaPrincipalComponent implements OnInit {
  datos: any[] = [
    { nroCasa: '1', bloque: 'A', propietario: 'Juan Pérez', categoria: 'Residencial', areaCasa: '120', cochera1: '20', areaTotal: '140', participacion: '12%' },
    { nroCasa: '2', bloque: 'B', propietario: 'María Gómez', categoria: 'Comercial', areaCasa: '80', cochera1: '10', areaTotal: '90', participacion: '8%' },
    { nroCasa: '3', bloque: 'A', propietario: 'Carlos López', categoria: 'Residencial', areaCasa: '150', cochera1: '30', areaTotal: '180', participacion: '15%' },
    { nroCasa: '4', bloque: 'C', propietario: 'Laura Ramírez', categoria: 'Residencial', areaCasa: '100', cochera1: '15', areaTotal: '115', participacion: '10%' },
    { nroCasa: '5', bloque: 'B', propietario: 'Pedro Martínez', categoria: 'Comercial', areaCasa: '90', cochera1: '12', areaTotal: '102', participacion: '9%' }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
