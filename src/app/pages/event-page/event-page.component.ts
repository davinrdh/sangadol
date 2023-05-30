import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/core/interfaces/event.interfaces';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  event: Event[] | undefined 

  constructor(private api: EventService){}

  ngOnInit(): void {
    this.getAllEvent()
    // this.getAllUser()
  }

  getAllEvent(){
    this.api.getAllEvent().subscribe(resp =>{
      this.event = resp
    })
  }

}
