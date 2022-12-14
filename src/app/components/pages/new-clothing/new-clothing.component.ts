import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roupa } from 'src/app/Roupa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-new-clothing',
  templateUrl: './new-clothing.component.html',
  styleUrls: ['./new-clothing.component.css']
})
export class NewClothingComponent implements OnInit {
  botao: string = "Adicionar!"

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
  }

  addClothing(roupa: Roupa){
    const formData = new FormData()

    formData.append('tipo', roupa.tipo)
    formData.append('tamanho', roupa.tamanho)
    formData.append('quantidade', roupa.quantidade)

    if(roupa.cor) formData.append('cor', roupa.cor)
    if(roupa.genero) formData.append('genero', roupa.genero)

    this.listService.includeClothing(formData).subscribe()

    this.router.navigate(['/'])
  }

}
