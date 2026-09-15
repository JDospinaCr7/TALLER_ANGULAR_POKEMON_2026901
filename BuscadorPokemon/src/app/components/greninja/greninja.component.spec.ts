import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreninjaComponent } from './greninja.component';

describe('GreninjaComponent', () => {
  let component: GreninjaComponent;
  let fixture: ComponentFixture<GreninjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreninjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreninjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
