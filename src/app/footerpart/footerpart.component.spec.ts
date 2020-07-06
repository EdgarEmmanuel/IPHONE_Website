import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpartComponent } from './footerpart.component';

describe('FooterpartComponent', () => {
  let component: FooterpartComponent;
  let fixture: ComponentFixture<FooterpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
