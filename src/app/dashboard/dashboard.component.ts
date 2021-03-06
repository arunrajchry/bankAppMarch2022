import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 user:any
 acno:any

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
  })

  withdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
  })
  loginDate:any
  constructor(private ds: DataService, private fb:FormBuilder, private router:Router) {
    this.user=this.ds.currentUser
    this.loginDate = new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please Log In....")
      this.router.navigateByUrl("")

    }
  }
  deposit() {
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount
    if(this.depositForm.valid){
    const result = this.ds.deposit(acno, pswd, amount)
      if (result) {
        alert(amount + " successfully deposited, final balance is: " + result)
      }
    }
    else{
      alert("invalid form")
    }
    

  }
  withdraw() {
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount
    if(this.depositForm.valid){
      const result = this.ds.withdraw(acno, pswd, amount)
      if (result) {
        alert(amount + " successfully debited, final balance is: " + result)
      }
    }
    else{
      alert("invalid form")

    }
    
  }
  deletefromParent(){
    this.acno = JSON.parse(localStorage.getItem("currentAcno")||'')
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")

  }
  onCancel(){
    this.acno=""
  }
  onDelete(event:any){
    alert("acoount deleted "+event)
  }
}
