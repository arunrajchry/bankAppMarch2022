import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect partner"
  accnum="Account Number Please"
  acno=""
  pswd=""

  database={
    1000:{acno:1000,uname:"Arun",password:1000,balance:5000}, 
    1001:{acno:1001,uname:"rino",password:1001,balance:7000},
    1002:{acno:1002,uname:"vishnu",password:1002,balance:2000}
  }
  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    
 this.acno=event.target.value
 console.log(this.acno);
 
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
     }

  login(){
    alert("login cliked")
  }
}
