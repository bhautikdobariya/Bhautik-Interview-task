import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

interface Location {
  id: number;
  name: string;
}
interface Physician {
  id: number;
  name: string;
}
interface interval {
  label: string;
  time: number;
}

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
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
  interValData: interval[] = [
    {
      label: '10 Min',
      time: 10,
    },
    {
      label: '20 Min',
      time: 20,
    },
    {
      label: '30 Min',
      time: 30,
    },
    {
      label: '60 Min',
      time: 60,
    },
    {
      label: '90 Min',
      time: 90,
    },
    {
      label: '120 Min',
      time: 0,
    },
  ];

  scheduleInputForm = new FormGroup({
    scheduleName: new FormControl('', [Validators.required]),
    scheduleDesc: new FormControl(''),
    location: new FormControl(''),
    physician: new FormControl(''),
    booingInterval: new FormControl(''),
    maxBookingSlot: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(1),
      Validators.max(20),
    ]),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    disableOpenSlot: new FormControl(false),
    scheduleEndDate: new FormControl(false),
    scheduleToDate: new FormControl(''),
  });

  constructor(private dateAdapter: DateAdapter<Date>, private router: Router) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  get sForm() {
    return this.scheduleInputForm.controls;
  }

  onSubmit() {
    console.log('scheduleInputForm', this.scheduleInputForm);
    let scheduleData = [];
    if (localStorage.getItem('schedules')) {
      scheduleData = JSON.parse(localStorage.getItem('schedules') || '[]');
    }
    scheduleData.push({
      id:
        scheduleData.length > 0
          ? scheduleData[scheduleData.length - 1].id + 1
          : 1,
      scheduleName: this.sForm.scheduleName.value,
      scheduleDesc: this.sForm.scheduleDesc.value,
      location: this.sForm.location.value,
      physician: this.sForm.physician.value,
      bookingInterval: this.sForm.booingInterval.value,
      maxBookingSlot: this.sForm.maxBookingSlot.value,
      startTime: this.sForm.startTime.value,
      endTime: this.sForm.endTime.value,
      disableOpenSlot: this.sForm.disableOpenSlot.value,
      scheduleEndDate: this.sForm.scheduleEndDate.value,
      scheduleToDate: this.sForm.scheduleToDate.value,
    });
    localStorage.setItem('schedules', JSON.stringify(scheduleData));
    this.scheduleInputForm.reset();
    this.router.navigateByUrl('/schedule');
    console.log('add schedule name', scheduleData);
  }
}
