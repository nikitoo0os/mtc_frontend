import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlotsPageComponent } from './edit-slots-page.component';

describe('EditSlotsPageComponent', () => {
  let component: EditSlotsPageComponent;
  let fixture: ComponentFixture<EditSlotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSlotsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSlotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
