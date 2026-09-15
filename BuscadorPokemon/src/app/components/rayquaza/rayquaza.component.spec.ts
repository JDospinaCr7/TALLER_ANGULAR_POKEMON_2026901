import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayquazaComponent } from './rayquaza.component';

describe('RayquazaComponent', () => {
  let component: RayquazaComponent;
  let fixture: ComponentFixture<RayquazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RayquazaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RayquazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
