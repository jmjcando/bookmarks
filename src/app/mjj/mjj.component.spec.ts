import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjjComponent } from './mjj.component';

describe('MjjComponent', () => {
  let component: MjjComponent;
  let fixture: ComponentFixture<MjjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MjjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
