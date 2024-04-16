import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfcomponentComponent } from './ifcomponent.component';

describe('IfcomponentComponent', () => {
  let component: IfcomponentComponent;
  let fixture: ComponentFixture<IfcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfcomponentComponent]
    });
    fixture = TestBed.createComponent(IfcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
