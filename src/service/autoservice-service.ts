import { Geolocation} from "@ionic-native/geolocation";
import { Component } from "@angular/core";
import { SupplierModel} from "../models/supplierModel";
import { Constants} from "../utils/constants";
import { HttpModule, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from "rxjs/Rx";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Console } from "@angular/core/src/console";

@Injectable()
export class AutoserviceService {
    
    geolocation = new Geolocation();
    mapdata: any= {};

    constructor(private http: Http) {}

    getMainServices() {
        return this.http.get(Constants.MAIN_SERVICES_URL)
        .map((res: Response) => {
            return res.json();
        })
        .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    getServices(): Observable<any[]> {
        return this.http.get(Constants.SERVICES_URL)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    getPosition() {
        return this.geolocation.getCurrentPosition();
    }

    watchPos() {
        return this.geolocation.watchPosition().subscribe((data) => {
            console.log("watch", data);
        });
    }

    getSuppliersq(chosenService): Observable<SupplierModel[]> {
        console.log(chosenService);
        return this.http.get(Constants.SUPPLIERS_URL + "/" + chosenService )
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    doesExistEmail(selectedEmail) {
        console.log(selectedEmail);
        return this.http.get(Constants.EMAIL_URL + "/" + selectedEmail)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    createSupplier(supplier: any= {}): Observable<any> {
        let body = JSON.stringify({supplier}) ;
        console.log(body);
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Constants.CREATE_SUPPLIER_URL, body, options ).map(
            (res: Response) => {
                console.log("response:", res);
                return res.ok;
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    createUser(user: any= {}): Observable<any> {
        let body = JSON.stringify({user}) ;
        console.log(body);
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Constants.CREATE_USER_URL, body, options ).map(
            (res: Response) => {
                return res.ok;
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

}