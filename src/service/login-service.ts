import { HttpModule, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from "rxjs/Rx";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class LoginService {
    public emailUrl: string = "http://localhost:4000/api/email/users";
    private loginUrl: string = "http://localhost:4000/api/auth";
    private getUserUrl: string = "http://localhost:4000/api/logged/user";

    constructor(private http: Http) {}

    doesExistEmail(selectedEmail) {
        return this.http.get(this.emailUrl + "/" + selectedEmail)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    doLogin(session: any= {}): Observable<any> {
        let body = JSON.stringify({session}) ;
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, body, options ).map(
            (res: Response) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    getUser(token): Observable<any> {
        return this.http.get(this.getUserUrl + "/" + token)
            .map((res: Response) => {
                return res.json();
            }).catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }


}