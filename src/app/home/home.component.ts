import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housingLocation';
import { HousingService } from '../housing.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingService: HousingService  = inject(HousingService);
  housingLocationList!: HousingLocation[];
  filteredLocationList: HousingLocation[] = [];
  filterForm = new FormGroup({
    inputValue: new FormControl(''),
  });

  constructor() {
    this.housingService.getHousingLocationList().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults() {
    const value =this.filterForm.value.inputValue; 
    if (!value) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList
    .filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(value.toLowerCase())
    );
  }
}
