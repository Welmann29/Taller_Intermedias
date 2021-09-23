import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientesComponent } from './update-clientes.component';

describe('UpdateClientesComponent', () => {
  let component: UpdateClientesComponent;
  let fixture: ComponentFixture<UpdateClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
