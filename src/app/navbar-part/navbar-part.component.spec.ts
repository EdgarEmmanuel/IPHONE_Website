import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPartComponent } from './navbar-part.component';

describe('NavbarPartComponent', () => {
  let component: NavbarPartComponent;
  let fixture: ComponentFixture<NavbarPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
