import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmjComponent } from './jmj.component';

describe('JmjComponent', () => {
  let component: JmjComponent;
  let fixture: ComponentFixture<JmjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
