import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect partner"
  accnum = "Account Number Please"
  acno = ""
  pswd = ""

  database: any = {
    1000: { acno: 1000, uname: "Arun", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "rino", password: 1001, balance: 7000 },
    1002: { acno: 1002, uname: "vishnu", password: 1002, balance: 2000 }
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
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


// two way binding
login() {

  var acno = this.acno
      var pswd = this.pswd
  let database = this.database
  if (acno in database) {
    if (pswd == database[acno]["password"]) {
      alert("login sucessful")
      this.router.navigateByUrl("dashboard")
    }
    else {
      alert("incorrect password")
    }

  }
  else {
    alert("user doesnot exist")
  }

}
}

