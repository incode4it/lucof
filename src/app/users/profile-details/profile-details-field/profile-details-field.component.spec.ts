import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsFieldComponent } from './profile-details-field.component';

describe('ProfileDetailsFieldComponent', () => {
  let component: ProfileDetailsFieldComponent;
  let fixture: ComponentFixture<ProfileDetailsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
