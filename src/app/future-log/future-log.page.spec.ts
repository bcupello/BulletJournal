import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureLogPage } from './future-log.page';

describe('FutureLogPage', () => {
  let component: FutureLogPage;
  let fixture: ComponentFixture<FutureLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
