import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Roupa } from 'src/app/Roupa';

@Component({
  selector: 'app-clothing-form',
  templateUrl: './clothing-form.component.html',
  styleUrls: ['./clothing-form.component.css']
})
export class ClothingFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Roupa>()
  @Input() botaoText!: string;
  @Input() clothingData: Roupa | null = null

  clothingForm!: FormGroup; 

  constructor() {}

  ngOnInit(): void {
      this.clothingForm = new FormGroup({
        id: new FormControl(this.clothingData ? this.clothingData.id : ''),
        tipo: new FormControl(this.clothingData ? this.clothingData.tipo : '', [Validators.required]),
        tamanho: new FormControl(this.clothingData ? this.clothingData.tamanho : '', [Validators.required,]),
        cor: new FormControl(this.clothingData ? this.clothingData.cor : ''),
        genero: new FormControl(this.clothingData ? this.clothingData.genero : ''),
        quantidade: new FormControl(this.clothingData ? this.clothingData.quantidade : '', [Validators.required,]),
      });
  }

  get tipo() {
    return this.clothingForm.get('tipo')!;
  }

  get tamanho() {
    return this.clothingForm.get('tamanho')!;
  }

  get quantidade() {
    return this.clothingForm.get('quantidade')!;
  }

  submit() {
    if (this.clothingForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.clothingForm.value)
  }
}

