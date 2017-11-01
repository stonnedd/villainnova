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
    geolocation = new Geolocation();
    mapdata: any= {};

    constructor(private http: Http) {}


    getMainServices() {
        return["Autolavado", "Grúas", "Hojalatero", "Mecánico General", "Talachero"]
    }

    getServices() { 
        return [
            "Cerrajero",
            "Electrico",
            "Embrague y Transmisión",
            "Clima",
            "Radiadores",
            "Mofles",
            "Taller especializado",
            "Refacciones",
            "Dirección y Suspensión",
            "Llantas y Neumáticos",
            "Mecánico Diesel",
            "Parabrisas y vidrios"];
    }

    getSuppliers() {
        return [
            {
              id: 1,
              service: "Llantas y Neumáticos",
              title: "talachas 1 ",
              titleDescription: "descripción...",
              reviews: "algo aquí",
              contentTitle: "contenido de titulo",
              contentDescription: "descripción",
              address: "dirección ...",
              schedule: "horario",
              phone: "telefono",
              website: "string",
              email: "string",
              lat: 20.084935 ,
              lng: -98.7958465,
              markLabel: "",
              zoom: 10,
              mapTypeControl: true,
              streetViewControl: true,
              iconUrl: "./../assets/mapicons/pin1.3.png",
              rate: 4,

            },
            {
                id: 2,
                service: "Mecánico General",
                img: "../assets/images/suppliers/mec1.JPG",
                title: "CANCHOLA",
                titleDescription: "descripción...",
                reviews: "algo aquí",
                contentTitle: "contenido de titulo",
                contentDescription: "descripción",
                address: "Esquina Av 14 Poniente, Calle Diagonal 19 Nte 1401, Jesús García, 72090 Puebla, Pue.",
                schedule: "8 a 19 hrs.",
                phone: "222 637 6990",
                website: "string",
                email: "string",
                lat: 19.2038899 ,
                lng: -99.290892,
                markLabel: "",
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/pin1.3.png",
                rate: 3,

            },
            {
                id: 4,
                service: "Mecánico General",
                title: "mec XX",
                titleDescription: "descripción...",
                reviews: "algo aquí",
                contentTitle: "contenido de titulo",
                contentDescription: "descripción",
                address: "dirección ...",
                schedule: "horario",
                phone: "telefono",
                website: "string",
                email: "string",
                lat: 20.0730022 ,
                lng: -98.790022,
                markLabel: "",
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/pin1.3.png",
                rate: 2,

            },
            {
                id: 3,
                service: "Cerrajero",
                title: "Cerra",
                titleDescription: "llaves y mas...",
                reviews: "algo aquí",
                contentTitle: "contenido de titulo",
                contentDescription: "descripción",
                address: "dirección ...",
                schedule: "horario",
                phone: "telefono",
                website: "string",
                email: "string",
                lat: 20.06624 ,
                lng: -98.7908,
                markLabel: "",
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/pin1.3.png",
                rate: 1.5,
            },
        ];
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
        return this.http.get(this.suppliersUrl + "/" + chosenService )
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
     }

}