import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmCotationComponent } from './frm-cotation.component';

describe('FrmCotationComponent', () => {
  let component: FrmCotationComponent;
  let fixture: ComponentFixture<FrmCotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmCotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmCotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
