import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLogPage } from './daily-log.page';

describe('DailyLogPage', () => {
  let component: DailyLogPage;
  let fixture: ComponentFixture<DailyLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
