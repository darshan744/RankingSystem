import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PslevelComponent } from './pslevel.component';

describe('PslevelComponent', () => {
  let component: PslevelComponent;
  let fixture: ComponentFixture<PslevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PslevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PslevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
