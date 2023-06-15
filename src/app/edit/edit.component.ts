import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  editId:string =""
  
  item:any={}

  bp: number = 0;
  adv: number = 0;
  pf: number = 0;
  lwf: number = 0;
  te: number = 0;
  td: number = 0;
  np: number = 0;
  

  editForm = this.editFb.group({
    empname: ['', Validators.required],
    dept: ['', Validators.required],
    desg: ['', Validators.required],
    doj: ['', Validators.required],
    bp: ['', Validators.required],
    adv: ['', Validators.required],
    pf: ['', Validators.required],
    lwf: ['', Validators.required],
    te: ['', Validators.required],
    td: ['', Validators.required],
    np: ['', Validators.required]
  })

 
  constructor(private editFb: FormBuilder, private api: ApiService, private router:Router, private viewActivatedRoute:ActivatedRoute) { }
  

  calculateNetPay(): void {
    this.te = this.bp;
    this.td = this.adv+ this.pf + this.lwf;
    this.np = this.te - this.td;
  }
  edit() {
    if (this.editForm.valid) {
      const _id = this.editId;
      console.log(_id);
      
      const updatedUser = {
        empname: this.editForm.value.empname,
        dept: this.editForm.value.dept,
        desg: this.editForm.value.desg,
        doj: this.editForm.value.doj,
        bp: this.editForm.value.bp,
        adv: this.editForm.value.adv,
        pf: this.editForm.value.pf,
        lwf: this.editForm.value.lwf,
        te: this.editForm.value.te,
        td: this.editForm.value.td,
        np: this.editForm.value.np
      };
  
      this.api.edititem(_id, updatedUser).subscribe(
        (result: any) => {
          alert('Updated Successfully...');
          this.router.navigate(['/sltable']);
        },
        error => {
          console.log('Error updating user:', error);
        }
      );
    } else {
      alert('Please enter all the fields');
    }
  }
  

  ngOnInit(): void {
    this.viewActivatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.editId = data.id
        console.log(this.editId);
        
      }
    )
    this.api.viewitem(this.editId).subscribe(
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
