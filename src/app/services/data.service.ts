import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database: any = {
    1000: { acno: 1000, uname: "Arun", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "rino", password: 1001, balance: 7000 },
    1002: { acno: 1002, uname: "vishnu", password: 1002, balance: 2000 }
  }

  constructor() { }
  // register
  register(uname: any, acno: any, password: any) {
    let database = this.database
    if (acno in database) {
      return false
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      console.log(database)
      return true

    }
  }

  // login
  login(acno: any, pswd: any) {


    let database = this.database
    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        return true
      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("user doesnot exist")
      return false
    }

  }

  // deposit
  deposit(acno: any, pswd: any, amt: any) {
    let database = this.database

    var amount = parseInt(amt)
    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        database[acno]["balance"] += amount
        return database[acno]["balance"]

      }

      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert(" user doesnot exist")
      return false
    }

  }

  // withdraw
  withdraw(acno: any, pswd: any, amt: any) {
    let database = this.database

    var amount = parseInt(amt)
    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        if (database[acno]["balance"] > amount) {
          database[acno]["balance"] -= amount
          return database[acno]["balance"]
        }
        else {
          alert("insufficient balance")
        }
      }

      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert(" user doesnot exist")
      return false
    }

  }
}
