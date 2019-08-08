import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from './event.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  form: FormGroup;
  constructor(public dialog: MatDialogRef<EventComponent>, private eventService: EventService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
      date: new FormControl({value: new Date(), disabled: true}, [Validators.required]),
      numPeople: new FormControl(1, [Validators.required, Validators.min(1)]),
    });
  }
  onSave() {
    const eventDataToSave = this.form.getRawValue();
    console.log(eventDataToSave);
    this.eventService.save(eventDataToSave.title, eventDataToSave.place, eventDataToSave.date, eventDataToSave.numPeople)
    .subscribe( () => {
      this.dialog.close();
    });
  }
  onCancel() {
      this.dialog.close();
  }


}
