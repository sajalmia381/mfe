import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkUiComponent } from './cdk-ui.component';

describe('CdkUiComponent', () => {
  let component: CdkUiComponent;
  let fixture: ComponentFixture<CdkUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CdkUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
