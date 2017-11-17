import { HttpModule, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from "rxjs/Rx";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class LoginService {
    public emailUrl: string = "http://localhost:4000/api/email";
    private loginUrl: string = "http://localhost:4000/api/auth";

    constructor(private http: Http) {}

    doesExistEmail(selectedEmail, profile) {
        return this.http.get(this.emailUrl + "/" + profile + "/" + selectedEmail)
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

}