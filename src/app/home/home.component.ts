import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event/event.component';
import { MatDialog } from '@angular/material';
import { EventService } from './event/event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myEventsCreated$: Observable<EventData[]>;
  constructor(public dialog: MatDialog, private eventService: EventService) { }

  ngOnInit() {
    this.myEventsCreated$ = this.eventService.myEventsCreated$();
    this.eventService.getMyEventsCreated();
  }
  onNewEvent() {
    const dialogRef = this.dialog.open(EventComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
