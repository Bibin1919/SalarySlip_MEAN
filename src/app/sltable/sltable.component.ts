import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sltable',
  templateUrl: './sltable.component.html',
  styleUrls: ['./sltable.component.css']
})
export class SltableComponent implements OnInit{
  allUsers:any=[]
  deleteUser: any;
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getallusers().subscribe(
      (result:any)=>{
        console.log(result);
        this.allUsers = result
      }
    )
  }

  onDeleteUser(_id: any) {
    this.api.deleteUser(_id)
      .subscribe(
        (result:any) => {
          console.log('User deleted successfully');
          alert('Deleted Successfully');
         /* auto reload */
          setTimeout(() => {
            location.reload();
          }, 1000); 
        },
        (result:any) => {
          console.error('Error deleting user:');
          alert('Cannot Delete');
          // Handle the error or display an error message to the user
        }
      );
  }

}
