import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../interfaces/housingLocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
