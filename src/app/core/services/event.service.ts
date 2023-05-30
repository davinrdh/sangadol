import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAllEvent(): Observable<any> {
    return this.http.get('https://647446737de100807b1a8f53.mockapi.io/event')
  }

  getViewId(id: Event) {
    return this.http.get('https://647446737de100807b1a8f53.mockapi.io/event' + '/' + id)
  }

  insertData(data : Event){
    return this.http.post('https://647446737de100807b1a8f53.mockapi.io/event', data)
  }

  deleteData(id : Event){
    return this.http.delete('https://647446737de100807b1a8f53.mockapi.io/event/' + id)
  }

}
