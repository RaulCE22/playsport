import { Component, OnInit } from '@angular/core';
import { EventService } from '../event/event.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myEventsCreated$: Observable<EventData[]>;
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.myEventsCreated$ = this.eventService.myEventsCreated$();
    this.eventService.getMyEventsCreated();
  }
  onNewEvent() {
    this.router.navigate(['event']);
  }
  onEventClick(eventId: string) {
    this.router.navigate(['event/' + eventId]);
  }
}
