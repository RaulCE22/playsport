import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event/event.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  onNewEvent() {
    console.log('new event');
    const dialogRef = this.dialog.open(EventComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
