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
}
