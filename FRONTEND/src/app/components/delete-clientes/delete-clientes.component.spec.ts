import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClientesComponent } from './delete-clientes.component';

describe('DeleteClientesComponent', () => {
  let component: DeleteClientesComponent;
  let fixture: ComponentFixture<DeleteClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
