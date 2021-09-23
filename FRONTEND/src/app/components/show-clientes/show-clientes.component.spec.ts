import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClientesComponent } from './show-clientes.component';

describe('ShowClientesComponent', () => {
  let component: ShowClientesComponent;
  let fixture: ComponentFixture<ShowClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
