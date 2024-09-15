import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { Test2Module } from './modules/test2/test2.module';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'test-1',
    loadChildren: () =>
      import('./modules/test1/test1.module').then(m => m.Test1Module),
  },
  {
    path: 'test-2',
    loadChildren: () => Test2Module,
  },
];
