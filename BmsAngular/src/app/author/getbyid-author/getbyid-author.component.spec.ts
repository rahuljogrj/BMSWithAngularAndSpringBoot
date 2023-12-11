import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidAuthorComponent } from './getbyid-author.component';

describe('GetbyidAuthorComponent', () => {
  let component: GetbyidAuthorComponent;
  let fixture: ComponentFixture<GetbyidAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetbyidAuthorComponent]
    });
    fixture = TestBed.createComponent(GetbyidAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
