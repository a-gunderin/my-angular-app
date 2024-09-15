import { Component, inject, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housingLocation';
import { HousingService } from '../../services/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  housingService: HousingService = inject(HousingService);
  housingLocationList!: HousingLocation[];
  filteredLocationList: HousingLocation[] = [];
  filterForm = new FormGroup({
    inputValue: new FormControl(''),
  });

  constructor() {
    this.housingService
      .getHousingLocationList()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });

    console.log('Constructor goes here!!!');
  }

  ngOnInit() {
    console.log('ngOnInit goes here!!!');
  }

  ngOnChanges() {
    console.log('ngOnChanges goes here!!!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy goes here!!!');
  }

  filterResults() {
    const value = this.filterForm.value.inputValue;
    if (!value) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation =>
        housingLocation?.city.toLowerCase().includes(value.toLowerCase())
    );
  }
}
