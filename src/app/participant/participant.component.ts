import { Component, OnInit, Input } from '@angular/core';
import { ParticipantService } from './participant.service';
import { Observable } from 'rxjs';
import { ParticipantData } from './participant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  @Input() eventId: string;
  @Input() userCreatorId: string;
  participants$: Observable<ParticipantData[]>;

  constructor(private participantService: ParticipantService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.participants$ = this.participantService.participants$();
  }
  onOpen() {
    console.log('open');
    this.participantService.getParticipants(this.eventId);
  }
  onJoin() {
    console.log('join');
    this.participantService.join(this.eventId, this.userCreatorId);
  }

}
