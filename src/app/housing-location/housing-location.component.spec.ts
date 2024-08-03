import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponent } from './housing-location.component';
import { RouterModule } from '@angular/router';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    component.housingLocation = {
      id: 1,
      name: 'Mock Housing Location',
      city: 'Mock City',
      state: 'Mock State',
      photo: 'mock-photo-url',
      availableUnits: 10,
      wifi: true,
      laundry: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
