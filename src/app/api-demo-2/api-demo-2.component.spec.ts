import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDemo2Component } from './api-demo-2.component';

describe('ApiDemo2Component', () => {
  let component: ApiDemo2Component;
  let fixture: ComponentFixture<ApiDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDemo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
