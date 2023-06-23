import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-superior-componente',
  templateUrl: './datos-superior-componente.component.html',
  styleUrls: ['./datos-superior-componente.component.css']
})
export class DatosSuperiorComponenteComponent implements OnInit {

  
  selectedItemPredios: string = '';
  selectedItemMeses: string = '';

  searchValuePredios: string = '';
  searchValueMeses: string = '';


  filteredItemsPredios: string[] = [];
  filteredItemsMeses: string[] = [];

  isActivePredios: boolean = false;
  isActiveMeses: boolean = false;

  predios = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

  meses = ["Enero-23", "Febrero-23", "Marzo-23", "Abril-23"];

  constructor() { }

  ngOnInit() {
    this.filteredItemsPredios = this.predios;
    this.selectedItemPredios = this.predios[0];

    this.filteredItemsMeses = this.meses;
    this.selectedItemMeses = this.meses[0];
  }

  toggleActivePredios(): void {
    this.isActivePredios = !this.isActivePredios;
  }

  toggleActiveMeses(): void {
    console.log("se detecta el click");
    this.isActiveMeses = !this.isActiveMeses;
  }

  selectItemPredios(item: string): void {
    this.selectedItemPredios = item;
    this.isActivePredios = false;
  }

  selectItemMeses(item: string): void {
    this.selectedItemMeses = item;
    this.isActiveMeses = false;
  }

  filterItemsPredios(): void {
    this.filteredItemsPredios = this.predios.filter(item => item.toLowerCase().startsWith(this.searchValuePredios.toLowerCase()));
  }

  filterItemsMeses(): void {
    this.filteredItemsMeses = this.meses.filter(item => item.toLowerCase().startsWith(this.searchValueMeses.toLowerCase()));
  }
  closeComboboxPredios(): void {
    this.isActivePredios = false;
  }
  
  closeComboboxMeses(): void {
    this.isActiveMeses = false;
  }
}
