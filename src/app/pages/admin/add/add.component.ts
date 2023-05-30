import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/core/interfaces/event.interfaces';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  event: Event[] | undefined 
  form = new Event
  

  constructor(private api: EventService, private router: Router){}

  ngOnInit(): void {
    this.getAllEvent()
    // this.getAllUser()
  }

  getAllEvent(){
    this.api.getAllEvent().subscribe(resp =>{
      this.event = resp
    })
  }

  insertData(){
    this.api.insertData(this.form).subscribe(resp =>{
      alert('Event berhasil ditambahkan!')
      this.router.navigate(['addevent-admin'])
      location.reload()
    })
  }

  deleteData(id: Event){
    this.api.deleteData(id).subscribe(resp =>{
      alert('Event berhasil terhapus!')
      location.reload()
    })
  }


}
