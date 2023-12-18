import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  schedulesData: any = [
    {
      id: 1,
      scheduleName: 'Report And Alert',
      backgroundColor: 'bisque',
      hoverBackColor: '#f8f1e9',
      totalAppoitment: 2,
      timeSlotData: [
        {
          timeLabel: '5:30 PM',
          data: [{ isEvent: false }, { isEvent: false }, { isEvent: false }],
        },
        {
          timeLabel: '6:00 PM',
          data: [
            { isEvent: false },
            { isEvent: false },
            {
              slotIndex: '2',
              userName: 'Manoj Ghediya',
              description: 'Diabetes, Blood presure',
              backColor: 'transparent',
              isEvent: true,
            },
          ],
        },
        {
          timeLabel: '6:30 PM',
          data: [{ isEvent: false }, { isEvent: false }, { isEvent: false }],
        },
        {
          timeLabel: '7:00 PM',
          data: [
            { isEvent: false },
            {
              slotIndex: '1',
              userName: '123 given S 123family',
              description: 'Just new',
              backColor: '#c4fcff',
              isEvent: true,
            },
            { isEvent: false },
          ],
        },
        {
          timeLabel: '7:30 PM',
          data: [{ isEvent: false }, { isEvent: false }, { isEvent: false }],
        },
      ],
    },
    {
      id: 2,
      scheduleName: 'Nursing Schedule',
      backgroundColor: '#9bc59c',
      hoverBackColor: '#d4ebd5',
      totalAppoitment: 0,
      timeSlotData: [
        {
          timeLabel: '9:00 PM',
          data: [
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
          ],
        },
        {
          timeLabel: '9:30 PM',
          data: [
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
          ],
        },
        {
          timeLabel: '10:00 PM',
          data: [
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
          ],
        },
        {
          timeLabel: '10:30 PM',
          data: [
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
          ],
        },
        {
          timeLabel: '11:00 PM',
          data: [
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
            { isEvent: false },
          ],
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  goToSchedule() {
    this.router.navigateByUrl('/schedule');
  }

  doBookAppointment() {}
}
