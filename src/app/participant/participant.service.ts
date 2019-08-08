import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';

import { environment } from '../../environments/environment';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ParticipantData } from './participant.model';

const BACKEND_URL = environment.apiUrl + '/participant';

@Injectable({ providedIn: 'root' })
export class ParticipantService {

  private participants = new BehaviorSubject<ParticipantData[]>([]);

  constructor(private http: HttpClient, private loadingService: LoadingService) { }
  participants$() {
    return this.participants.asObservable();
  }
  join(eventId: string, userCreatorId: string) {
    this.loadingService.show();
    const participantData: ParticipantData = {
      _id: null, // create new on server
      userId: null, // Add on server
      eventId: eventId,
      userNickName: null, // Add on server
      admin: null, // Calculate on server
    };
    return this.http.post(BACKEND_URL + '/join', { ...participantData, creator: userCreatorId })
      .subscribe(
        () => {
          this.loadingService.hide('Participant added susscesfuly!');
        },
        () => {
          this.loadingService.hide('Try again, sorry!', true);
        }
      );
  }
  getParticipants(eventId: string) {
    this.http.get<{ message: string, participants: ParticipantData[] }>(BACKEND_URL + '/' + eventId)
      .subscribe(result => {
        console.log(result);
        this.participants.next(result.participants);
      });
  }

}
