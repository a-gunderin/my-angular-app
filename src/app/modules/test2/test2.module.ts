import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from '../../components/test2/test2.component';
import { Test2RoutingModule } from './test2-routing.module';
import { HousingService } from '../../services/housing.service';

@NgModule({
  declarations: [Test2Component],
  imports: [CommonModule, Test2RoutingModule],
  providers: [HousingService],
})
export class Test2Module {
  constructor(private HousingService: HousingService) {
    console.log(
      `Service ID in Test2Module: ${this.HousingService.getInstanceId()}`
    );
  }
}
