import { Geolocation} from "@ionic-native/geolocation";
import { Component } from "@angular/core";
import { SupplierModel} from "../models/supplierModel";
import { HttpModule, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Constants} from "../utils/constants";
import { Observable} from "rxjs/Rx";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ProfileService {
    constructor(private http: Http) {}
    getUserData(id): Observable<any> {
        return this.http.get(Constants.USER_BY_ID + "/" + id)
            .map((res: Response) => {
                console.log("response USER", res.json());
                return res.json();

            }).catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    getUserServices(id): Observable<any> {
        return this.http.get(Constants.SERVICES_BY_USER_ID + "/" + id)
        .map((res: Response) => {
            console.log("response Services", res.json());
            return res.json().providers;
        }).catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }


}