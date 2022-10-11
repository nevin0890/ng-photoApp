import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addphotos',
  templateUrl: './addphotos.component.html',
  styleUrls: ['./addphotos.component.css']
})
export class AddphotosComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchPhotos();
  }
  
  fetchPhotos=()=>{this.api.getAllPhotos().subscribe((data)=>{this.getPhotos=data;})}

  getPhotos:any=[]

  ngOnInit(): void {
  }

}
