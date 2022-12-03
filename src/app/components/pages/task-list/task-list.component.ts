import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/Roupa';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  roupas: Roupa[]

  constructor() { 
    this.roupas = [
      {tipo: "Camiseta", tamanho:"M", cor: "branca", genero: "masculino", quantidade: 2,},
      {tipo: "Calça", tamanho: 40, cor: "preta", genero: "masculino", quantidade: 1,},
      {tipo: "Vestido", tamanho: "P", cor: "azul", genero: "feminino", quantidade: 1,},
      {tipo: "Sapato", tamanho: 36, cor: "vermelho", genero: "feminino", quantidade: -1,},
      {tipo: "Saia", tamanho: "P", cor: "verde", genero: "feminino", quantidade: 3,}
    ]
  }

  ngOnInit(): void {
  }

}
