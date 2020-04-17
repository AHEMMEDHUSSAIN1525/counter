import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpracticeComponent } from './ngpractice.component';

describe('NgpracticeComponent', () => {
  let component: NgpracticeComponent;
  let fixture: ComponentFixture<NgpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
