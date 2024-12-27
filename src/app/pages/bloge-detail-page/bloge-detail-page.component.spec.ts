import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogeDetailPageComponent } from './bloge-detail-page.component';

describe('BlogeDetailPageComponent', () => {
  let component: BlogeDetailPageComponent;
  let fixture: ComponentFixture<BlogeDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogeDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
