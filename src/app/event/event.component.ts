import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  form: FormGroup;
  eventId: string;
  userCreatorId: string;
  constructor(private eventService: EventService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
      date: new FormControl({value: new Date(), disabled: true}, [Validators.required]),
      numPeople: new FormControl(1, [Validators.required, Validators.min(1)]),
    });
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
    if ( this.eventId ) {
      this.eventService.getEvent(this.eventId)
      .subscribe(result => {
        this.form.patchValue({
          title: result.event.title,
          place: result.event.place,
          date: result.event.date,
          numPeople: result.event.numPeople
        });
        this.userCreatorId = result.event.creator;
        console.log(result);
      });
    }
  }
  onSave() {
    const eventDataToSave = this.form.getRawValue();
    console.log(eventDataToSave);
    this.eventService.save(eventDataToSave.title, eventDataToSave.place, eventDataToSave.date, eventDataToSave.numPeople)
    .subscribe( () => {
      this.router.navigate(['home']);
    });
  }

}
