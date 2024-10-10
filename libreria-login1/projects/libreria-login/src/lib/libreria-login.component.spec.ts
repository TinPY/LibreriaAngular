import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaLoginComponent } from './libreria-login.component';

describe('LibreriaLoginComponent', () => {
  let component: LibreriaLoginComponent;
  let fixture: ComponentFixture<LibreriaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibreriaLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibreriaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
