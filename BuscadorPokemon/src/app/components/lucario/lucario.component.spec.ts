import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucarioComponent } from './lucario.component';

describe('LucarioComponent', () => {
  let component: LucarioComponent;
  let fixture: ComponentFixture<LucarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
