import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/core/interfaces/event.interfaces';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  constructor(private api: EventService, private route: ActivatedRoute, private router: Router){}
  event: Event [] | undefined
  id: any
  form = new Event()
  dataView: any

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getViewId()
  }

  getViewId() {
    this.api.getViewId(this.id)
      .subscribe(res => {
        this.dataView = res
        this.form = this.dataView
      })
  }

  getAll() {
    this.api.getAllEvent().subscribe(resp =>{
      this.event = resp
    })
  }


}
