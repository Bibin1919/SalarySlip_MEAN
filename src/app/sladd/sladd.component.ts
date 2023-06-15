import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sladd',
  templateUrl: './sladd.component.html',
  styleUrls: ['./sladd.component.css']
})
export class SladdComponent {
  bp: number = 0;
  adv: number = 0;
  pf: number = 0;
  lwf: number = 0;
  te: number = 0;
  td: number = 0;
  np: number = 0;
  

  addForm = this.addFb.group({
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
  constructor(private addFb: FormBuilder, private api: ApiService, private router:Router) { }

  calculateNetPay(): void {
    this.te = this.bp;
    this.td = this.adv+ this.pf + this.lwf;
    this.np = this.te - this.td;
  }
  add() {
    if (this.addForm.valid) {
      let empname = this.addForm.value.empname;
      let dept = this.addForm.value.dept;
      let desg = this.addForm.value.desg;
      let doj = this.addForm.value.doj;
      let bp = this.addForm.value.bp;
      let adv = this.addForm.value.adv;
      let pf = this.addForm.value.pf;
      let lwf = this.addForm.value.lwf;
      let te = this.addForm.value.te;
      let td = this.addForm.value.td;
      let np = this.addForm.value.np;

      this.api.add(empname, dept, desg, doj, bp, adv, pf, lwf, te, td, np)
        .subscribe((result: any) => {
          alert(result.message);
          this.router.navigate(['/sltable']);
        })
    }
    else {
      alert('Please Enter The Fields !!!..');
    }
  }
}
