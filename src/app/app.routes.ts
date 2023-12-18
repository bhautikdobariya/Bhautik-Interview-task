import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./Pages/schedule/schedule.module').then((m) => m.ScheduleModule),
  },
];
