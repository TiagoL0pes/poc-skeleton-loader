import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedCardComponent } from './loaded-card.component';

describe('LoadedCardComponent', () => {
  let component: LoadedCardComponent;
  let fixture: ComponentFixture<LoadedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
