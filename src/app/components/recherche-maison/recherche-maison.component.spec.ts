import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMaisonComponent } from './recherche-maison.component';

describe('RechercheMaisonComponent', () => {
  let component: RechercheMaisonComponent;
  let fixture: ComponentFixture<RechercheMaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheMaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
