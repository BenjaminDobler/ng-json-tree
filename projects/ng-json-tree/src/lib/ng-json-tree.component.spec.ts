import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgJsonTreeComponent } from './ng-json-tree.component';

describe('NgJsonTreeComponent', () => {
  let component: NgJsonTreeComponent;
  let fixture: ComponentFixture<NgJsonTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgJsonTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgJsonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
