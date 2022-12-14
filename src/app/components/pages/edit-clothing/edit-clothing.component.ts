import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Roupa } from 'src/app/Roupa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-clothing',
  templateUrl: './edit-clothing.component.html',
  styleUrls: ['./edit-clothing.component.css']
})
export class EditClothingComponent implements OnInit {

  botao: string = "Atualizar!"
  roupa!: Roupa

  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(id)
    this.listService.getClothing(id).subscribe((roupa) => this.roupa = roupa)
    if(this.roupa) console.log(this.roupa)
    
  }

  editClothing(roupa: Roupa){
    const id = this.roupa?.id
    const formData = new FormData()

    formData.append('tipo', roupa.tipo)
    formData.append('tamanho', roupa.tamanho)
    formData.append('quantidade', roupa.quantidade)

    if(roupa.cor) formData.append('cor', roupa.cor)
    if(roupa.genero) formData.append('genero', roupa.genero)

    this.listService.updateMoment(id!, formData).subscribe()

    this.router.navigate(['/'])
  }
}
