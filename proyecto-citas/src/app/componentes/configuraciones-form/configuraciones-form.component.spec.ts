import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfiguracionesFormComponent } from './configuraciones-form.component';

describe('ConfiguracionesFormComponent', () => {
  let component: ConfiguracionesFormComponent;
  let fixture: ComponentFixture<ConfiguracionesFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfiguracionesFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
