import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMapDetailsComponent } from './config-map-details.component';

describe('ConfigMapDetailsComponent', () => {
  let component: ConfigMapDetailsComponent;
  let fixture: ComponentFixture<ConfigMapDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigMapDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
