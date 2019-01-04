import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressesComponent } from './user-addresses.component';

describe('UserAddressesComponent', () => {
  let component: UserAddressesComponent;
  let fixture: ComponentFixture<UserAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
