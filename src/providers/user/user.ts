import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Api } from "../api/api";

@Injectable()
export class User {
  _user: any;

  constructor(public http: Http, public api: Api) {
  }

  login(session: any) {
    console.log("en login");
    let seq = this.api.post("login", JSON.stringify({session})).share();
    seq
      .map(res => res.json())
      .subscribe(res => {
        console.log(res.JSON);
        if (res.status == "success") {
          this._loggedIn(res);
          console.log(res.JSON);
        } else {
        }
      }, err => {
        console.error("ERROR", err);
      });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  // signup(accountInfo: any) {
  //   let seq = this.api.post("signup", accountInfo).share();

  //   seq
  //     .map(res => res.json())
  //     .subscribe(res => {
  //       // If the API returned a successful response, mark the user as logged in
  //       if (res.status == "success") {
  //         this._loggedIn(res);
  //       }
  //     }, err => {
  //       console.error("ERROR", err);
  //     });

  //   return seq;
  // }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
