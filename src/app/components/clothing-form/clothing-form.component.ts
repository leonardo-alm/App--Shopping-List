import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Clothing } from 'src/app/Clothing';

@Component({
  selector: 'app-clothing-form',
  templateUrl: './clothing-form.component.html',
  styleUrls: ['./clothing-form.component.css']
})
export class ClothingFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Clothing>()
  @Input() buttonText!: string;
  @Input() clothingData: Clothing | null = null

  clothingForm!: FormGroup; 

  constructor() {}

  ngOnInit(): void {
      this.clothingForm = new FormGroup({
        id: new FormControl(this.clothingData ? this.clothingData.id : ''),
        type: new FormControl(this.clothingData ? this.clothingData.type : '', [Validators.required]),
        size: new FormControl(this.clothingData ? this.clothingData.size : '', [Validators.required,]),
        color: new FormControl(this.clothingData ? this.clothingData.color : ''),
        gender: new FormControl(this.clothingData ? this.clothingData.gender : ''),
        amount: new FormControl(this.clothingData ? this.clothingData.amount : '', [Validators.required,]),
      });
  }

  get type() {
    return this.clothingForm.get('type')!;
  }

  get size() {
    return this.clothingForm.get('size')!;
  }

  get amount() {
    return this.clothingForm.get('amount')!;
  }

  submit() {
    if (this.clothingForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.clothingForm.value)
  }
}

