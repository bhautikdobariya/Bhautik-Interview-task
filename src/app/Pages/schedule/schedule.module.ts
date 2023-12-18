import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ScheduleModule {}
