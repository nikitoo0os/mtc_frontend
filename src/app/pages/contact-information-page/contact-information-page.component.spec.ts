import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationPageComponent } from './contact-information-page.component';

describe('ContactInformationPageComponent', () => {
  let component: ContactInformationPageComponent;
  let fixture: ComponentFixture<ContactInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInformationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
