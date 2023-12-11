import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallauthorComponent } from './getallauthor.component';

describe('GetallauthorComponent', () => {
  let component: GetallauthorComponent;
  let fixture: ComponentFixture<GetallauthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallauthorComponent]
    });
    fixture = TestBed.createComponent(GetallauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
