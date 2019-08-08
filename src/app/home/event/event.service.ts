import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../loading/loading.service';

import { environment } from '../../../environments/environment';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/event';

@Injectable({ providedIn: 'root' })
export class EventService {

  private myEventsCreated = new BehaviorSubject<EventData[]>([]);

  constructor(private http: HttpClient, private loadingService: LoadingService) { }
  myEventsCreated$() {
    return this.myEventsCreated.asObservable();
  }
  save(title: string, place: string, date: Date, numPeople: number) {
    this.loadingService.show();
    const eventData: EventData = {
      creator: null,
      title: title,
      place: place,
      date: date,
      numPeople: numPeople
    };
    console.log(eventData);
    return this.http.post(BACKEND_URL + '/save', eventData)
      .pipe(
        tap( () => {
          this.loadingService.hide('Event added susscesfuly!');
        }),
        catchError( () => {
          this.loadingService.hide('Try again, sorry!', true);
          return throwError(false);
        })
      );
  }
  getMyEventsCreated() {
    this.http.get<{ message: string, events: EventData[] }>(BACKEND_URL + '/getMyEventsCreated')
      .subscribe(result => {
        console.log(result);
        this.myEventsCreated.next(result.events);
      });
  }

}
