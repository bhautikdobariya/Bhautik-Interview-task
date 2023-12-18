import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Location {
  id: number;
  name: string;
}
interface Physician {
  id: number;
  name: string;
}
@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  schedulesData: any[] = [];
  locationsData: Location[] = [
    { id: 1, name: 'Rajkot' },
    { id: 2, name: 'Ahemdabad' },
    { id: 3, name: 'Surat' },
  ];
  physiciansData: Physician[] = [
    { id: 1, name: 'Dr. Bhavesh' },
    { id: 2, name: 'Dr. Mihir' },
    { id: 3, name: 'Dr. Sumita' },
  ];
  constructor(private router: Router) {
    if (localStorage.getItem('schedules')) {
      this.schedulesData = JSON.parse(
        localStorage.getItem('schedules') || '[]'
      );
    }
    if (this.schedulesData.length > 0) {
      this.schedulesData.forEach((element) => {
        element.locationData = this.locationsData.find(
          (f) => f.id == element.location
        );
        element.physicianData = this.physiciansData.find(
          (f) => f.id == element.physician
        );
      });
    }
    console.log('schedule data', this.schedulesData);
  }

  doDeleteSchedule(ind: number) {
    this.schedulesData.splice(ind, 1);
    if (this.schedulesData.length == 0) {
      localStorage.removeItem('schedules');
    }
  }

  goToAddSchedule() {
    this.router.navigateByUrl('/schedule/add');
  }
}
