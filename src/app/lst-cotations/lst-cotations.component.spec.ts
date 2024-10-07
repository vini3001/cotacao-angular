import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstCotationsComponent } from './lst-cotations.component';

describe('LstCotationsComponent', () => {
  let component: LstCotationsComponent;
  let fixture: ComponentFixture<LstCotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LstCotationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LstCotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
