import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDetailPageComponent } from './package-detail-page.component';

describe('PackageDetailPageComponent', () => {
  let component: PackageDetailPageComponent;
  let fixture: ComponentFixture<PackageDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
