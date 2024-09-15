import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from '../../components/test2/test2.component';
import { Test2RoutingModule } from './test2-routing.module';

@NgModule({
  declarations: [Test2Component],
  imports: [CommonModule, Test2RoutingModule],
})
export class Test2Module {}
