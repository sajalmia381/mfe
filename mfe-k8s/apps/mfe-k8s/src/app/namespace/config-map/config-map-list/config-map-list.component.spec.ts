import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMapListComponent } from './config-map-list.component';

describe('ConfigMapListComponent', () => {
  let component: ConfigMapListComponent;
  let fixture: ComponentFixture<ConfigMapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigMapListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
