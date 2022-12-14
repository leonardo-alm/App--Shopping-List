import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/Roupa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  roupas: Roupa[] = []

  constructor(private listService: ListService) { 
    this.getRoupas()
  }

  ngOnInit(): void {
    
  }

  getRoupas(): void{
    this.listService.getClothes().subscribe((clothes) => this.roupas = clothes)
  }

}
