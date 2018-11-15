import { EventSesrvice } from './../service/Event.service';
import { Options } from 'fullcalendar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.css']
})
export class AdminCalendarComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;

   constructor(protected eventService: EventSesrvice) { }
 // tslint:disable-next-line:no-trailing-whitespace
 
   ngOnInit() {
     this.eventService.getEvents().subscribe(data => {
       this.calendarOptions = {
         editable: true,
         eventLimit: false,
         header: {
           left: 'prev,next today',
           center: 'title',
           right: 'month,agendaWeek,agendaDay,listMonth'
         },
         events: data
       };
     });
   }

   clickButton(model: any) {
     this.displayEvent = model;
   }
   eventClick(model: any) {
     model = {
       event: {
         id: model.event.id,
         start: model.event.start,
         end: model.event.end,
         title: model.event.title,
         allDay: model.event.allDay
         // other params
       },
       duration: {}
     },
     this.displayEvent = model;
   }
   updateEvent(model: any) {
     model = {
       event: {
         id: model.event.id,
         start: model.event.start,
         end: model.event.end,
         title: model.event.title
         // other params
       },
       duration: {
         _data: model.duration._data
       }
     },
     this.displayEvent = model;
   }
}
