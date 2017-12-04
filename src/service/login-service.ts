import { HttpModule, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Constants} from "../utils/constants";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { concatStatic } from "rxjs/operator/concat";

@Injectable()
export class LoginService {

    constructor(private http: Http) {}
    doesExistEmail(selectedEmail) {
        return this.http.get(Constants.EMAIL_URL + "/" + selectedEmail)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    doLogin(session: any= {}): Observable<any> {
        let body = JSON.stringify({session}) ;
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Constants.LOGIN_URL, body, options ).map(
            (res: Response) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    getUser(token): Observable<any> {
        return this.http.get(Constants.LOGGED_USER_URL + "/" + token)
            .map((res: Response) => {
                return res.json();
            }).catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }


}