import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTesteComponent } from './pagina-teste.component';

describe('PaginaTesteComponent', () => {
  let component: PaginaTesteComponent;
  let fixture: ComponentFixture<PaginaTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaTesteComponent]
    });
    fixture = TestBed.createComponent(PaginaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
