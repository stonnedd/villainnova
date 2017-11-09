import { Geolocation} from "@ionic-native/geolocation";
import { Component } from "@angular/core";
import { SupplierModel} from "../models/supplierModel";
import { HttpModule, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from "rxjs/Rx";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AutoserviceService {

    public suppliersUrl: string = "http://localhost:4000/api/suppliers";
    public createSupplierUrl: string = "http://localhost:4000/api/suppliers/create";
    public createCustomerUrl: string = "http://localhost:4000/api/customers/create";
    public servicesUrl: string = "http://localhost:4000/api/services";
    public mainservicesUrl: string = "http://localhost:4000/api/mainservices";
    geolocation = new Geolocation();
    mapdata: any= {};

    constructor(private http: Http) {}

    getMainServices() {
        return this.http.get(this.mainservicesUrl)
        .map((res: Response) => {
            return res.json();
        })
        .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    getServices(): Observable<any[]> {
        return this.http.get(this.servicesUrl)
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
        return this.http.get(this.suppliersUrl + "/" + chosenService )
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
        return this.http.post(this.createSupplierUrl, body, options ).map(
            (res: Response) => {
                console.log("response:", res);
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    createCustomer(customer: any= {}): Observable<any> {
        let body = JSON.stringify({customer}) ;
        console.log(body);
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.createCustomerUrl, body, options ).map(
            (res: Response) => {
                console.log("response:", res);
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

}