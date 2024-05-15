import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildparentComponent } from './childparent.component';

describe('ChildparentComponent', () => {
  let component: ChildparentComponent;
  let fixture: ComponentFixture<ChildparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
