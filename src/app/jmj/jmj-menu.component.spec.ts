import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmjMenuComponent } from './jmj-menu.component';

describe('JmjMenuComponent', () => {
  let component: JmjMenuComponent;
  let fixture: ComponentFixture<JmjMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmjMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmjMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
