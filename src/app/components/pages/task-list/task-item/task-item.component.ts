import { Component, Input, OnInit } from '@angular/core';
import { Roupa } from 'src/app/Roupa';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() item!: Roupa

  constructor() { }

  ngOnInit(): void {
  }

}
