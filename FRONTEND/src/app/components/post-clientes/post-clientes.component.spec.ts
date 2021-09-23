import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClientesComponent } from './post-clientes.component';

describe('PostClientesComponent', () => {
  let component: PostClientesComponent;
  let fixture: ComponentFixture<PostClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
