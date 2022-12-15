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
    this.listService.postClothing(roupa).subscribe()
    this.router.navigate(['/'])
  }

}
