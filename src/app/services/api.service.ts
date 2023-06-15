import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'https://salaryslip-meanserver.onrender.com'
  constructor(private http: HttpClient) { }

  add(empname: any, dept: any, desg: any, doj: any, bp: any, adv: any, pf: any, lwf: any, te: any, td: any, np: any) {
    const body = {
      empname,dept,desg,doj,bp,adv,pf,lwf,te,td,np
    }
    return this.http.post(`${this.BASE_URL}/add`,body);
  }

  getallusers() {
    return this.http.get(`${this.BASE_URL}/allusers`)
  }

  viewitem(_id:any){
    return this.http.get(`${this.BASE_URL}/allusers/${_id}`)
  }

  edititem(_id: string, updatedUser: any) {
    return this.http.put(`${this.BASE_URL}/user/${_id}`, updatedUser);
  }
  deleteUser(_id: any) {
    return this.http.delete(`${this.BASE_URL}/users/${_id}`);
  }
}
