import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  viewId:string =""
  item:any={}

  constructor(private viewActivatedRoute:ActivatedRoute, private api:ApiService){}

  printPage(): void {
    window.print();
  }

  ngOnInit(): void {
    this.viewActivatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.viewId = data._id
        console.log(this.viewId);
        
      }
    )
    this.api.viewitem(this.viewId).subscribe(
      (result:any)=>{
        console.log(result);
        this.item = result
      },
      (result:any)=>{
        alert(result.error)
      }
    )
  }


}