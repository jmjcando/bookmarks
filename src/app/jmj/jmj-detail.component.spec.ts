import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmjDetailComponent } from './jmj-detail.component';

describe('JmjDetailComponent', () => {
  let component: JmjDetailComponent;
  let fixture: ComponentFixture<JmjDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmjDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmjDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
