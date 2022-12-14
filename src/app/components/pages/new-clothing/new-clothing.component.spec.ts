import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClothingComponent } from './new-clothing.component';

describe('NewClothingComponent', () => {
  let component: NewClothingComponent;
  let fixture: ComponentFixture<NewClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
