import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Package2Component } from './package2.component';

describe('Package2Component', () => {
  let component: Package2Component;
  let fixture: ComponentFixture<Package2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Package2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Package2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
