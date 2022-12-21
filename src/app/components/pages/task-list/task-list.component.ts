import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/app/Clothing';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  clothes: Clothing[] = []

  constructor(private listService: ListService) { 
    this.getClothings()
  }

  ngOnInit(): void {
    
  }

  getClothings(): void{
    this.listService.getClothes().subscribe((clothes) => this.clothes = clothes)
  }

}
