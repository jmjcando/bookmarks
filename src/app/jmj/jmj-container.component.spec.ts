import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmjContainerComponent } from './jmj-container.component';

describe('JmjContainerComponent', () => {
  let component: JmjContainerComponent;
  let fixture: ComponentFixture<JmjContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmjContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmjContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
