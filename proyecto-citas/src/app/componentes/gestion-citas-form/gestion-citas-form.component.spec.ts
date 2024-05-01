import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GestionCitasFormComponent } from './gestion-citas-form.component';

describe('GestionCitasFormComponent', () => {
  let component: GestionCitasFormComponent;
  let fixture: ComponentFixture<GestionCitasFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GestionCitasFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCitasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
