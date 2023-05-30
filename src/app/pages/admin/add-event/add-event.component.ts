import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/interfaces/event.interfaces';
import { EventService } from 'src/app/core/services/event.service';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit{

  event: Event[] | undefined 
  dataId: Event[] | undefined

  constructor(private api: EventService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getAllEvent()
    // this.getAllUser()
  }

  getAllEvent(){
    this.api.getAllEvent().subscribe(resp =>{
      this.event = resp
    })
  }

  openDialog(id: Event) {
    this.dialog.open(DetailComponent, {
      data: { id: Event }
    });
  }

  // getAllUser(){
  //   this.api.getAllUser().subscribe(resp =>{
  //     this.event =resp
  //   })
  // }




}
