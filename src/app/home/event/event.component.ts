import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  form: FormGroup;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
      date: new FormControl({value: new Date(), disabled: true}, [Validators.required]),
      numPeople: new FormControl(1, [Validators.required, Validators.min(1)]),
    });
  }
  onSave() {
    console.log(this.form);
    this.eventService.save(this.form.value.title, this.form.value.palce, this.form.value.date, this.form.value.numPeople);
  }
  onCancel() {

  }


}
