import { Component, Input, OnInit } from '@angular/core';
import { Roupa } from 'src/app/Roupa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() item?: Roupa

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  deleteItem(item: Roupa){
    this.listService.deleteClothing(item.id).subscribe()
    this.item = undefined;
  }
}
