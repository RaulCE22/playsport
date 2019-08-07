import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService} from '../../loading/loading.service';

import { environment } from '../../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/event';

@Injectable({ providedIn: 'root'})
export class EventService {

  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  save(title: string, place: string, date: Date, numPeople: number) {
    this.loadingService.show();
    const eventData: EventData = {
      title: title,
      place: place,
      date: date,
      numPeople: numPeople
    };
    return this.http.post(BACKEND_URL + '/save', eventData)
    .subscribe( () => {
      this.loadingService.hide('Event added susscesfuly!');
    }, () => this.loadingService.hide('Try again, sorry!', true));
  }


}
