import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareModalComponent } from './share-modal.component';

describe('ShareModalComponent', () => {
  let component: ShareModalComponent;
  let fixture: ComponentFixture<ShareModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareModalComponent]
    });
    fixture = TestBed.createComponent(ShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
