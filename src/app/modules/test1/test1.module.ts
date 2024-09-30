import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from '../../components/test1/test1.component';
import { HousingService } from '../../services/housing.service';

@NgModule({
  declarations: [Test1Component],
  imports: [CommonModule, Test1RoutingModule],
  providers: [HousingService],
})
export class Test1Module {
  constructor(private HousingService: HousingService) {
    console.log(
      `Service ID in Test1Module: ${this.HousingService.getInstanceId()}`
    );
  }
}
