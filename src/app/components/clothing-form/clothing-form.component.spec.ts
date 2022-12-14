import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingFormComponent } from './clothing-form.component';

describe('ClothingFormComponent', () => {
  let component: ClothingFormComponent;
  let fixture: ComponentFixture<ClothingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
