import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect partner"
  accnum = "Account Number Please"
  

 loginForm=this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

 })
  constructor(private router: Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  // two way binding
  login() {

    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    if(this.loginForm.valid){
      const result = this.ds.login(acno, pswd)
      if (result) {
        alert("login successful")
        this.router.navigateByUrl("dashboard")
      }
    }
    else{
      alert("invalid form")
    }
    
  }
}
  // acnoChange(event: any) {

  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd);

  // }
  // // login using event binding
  //   login() {
  //     var acno = this.acno
  //     var pswd = this.pswd
  //     let database = this.database
  //     if (acno in database) {
  //       if (pswd == database[acno]["password"]) {
  //         alert("login sucessful")
  //       }
  //       else {
  //         alert("incorrect password")
  //       }

  //     }
  //     else {
  //       alert("user doesnot exist")
  //     }

  //   }



  // login using template referencing variable
  // login(a:any,p:any) {

  //   console.log(a.value);

  //   var acno = a.value
  //   var pswd = p.value
  //   let database = this.database
  //   if (acno in database) {
  //     if (pswd == database[acno]["password"]) {
  //       alert("login sucessful")
  //     }
  //     else {
  //       alert("incorrect password")
  //     }

  //   }
  //   else {
  //     alert("user doesnot exist")
  //   }

  // }


  