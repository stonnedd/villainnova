import { HttpModule, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Injectable } from "@angular/core";
import { Constants} from "../utils/constants";
import { Observable} from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class ApiService {

    constructor(public http: Http) {}

    getService(postUrl): Observable<any> {
        return this.http.get(postUrl)
        .map((res: Response) => {
            console.log("response:", res);
            console.log("res JSON:", res.json());
            return res.json();
        })
        .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    postService(postUrl, body: any= {}): Observable<any> {
        console.log("En API SVC:", postUrl, body);
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(postUrl, body, options ).map(
            (res: Response) => {
                console.log("response:", res);
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    putService(putUrl: string, body: any= {} ): Observable<any> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(putUrl, body, options ).map(
            (res: Response) => {
                console.log("response:", res);
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }
}

