import {Geolocation} from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import {SupplierModel} from '../models/supplierModel'
export class AutoserviceService {
    

    geolocation = new Geolocation();
    constructor(){}
    mapdata:any={};
    
    getServices(){
        return ['Mecánico','Talachero','Cerrajero','Eléctrico','Transmisiones','Climas',
            'Radiadores','Mofles','Hojalatero','Taller Automotriz','Autolovado','Gruas'];
    }

    getSuppliers(){
        return [
            {
              id:1,
              service: 'Talachero',
              title: 'talachas 1 ',
              titleDescription: 'descripción...',
              reviews: 'algo aquí',
              contentTitle: 'contenido de titulo',
              contentDescription: 'descripción',
              address: 'dirección ...',
              schedule: 'horario',
              phone: 'telefono',
              website: 'string',
              email: 'string',
              lat: 20.084935 ,
              lng: -98.7958465,
              markLabel:'',
              zoom: 10,
              mapTypeControl: true,
              streetViewControl: true,
              iconUrl:"../assets/mapicons/tires.png",
              iconsStars : [ 
                  {
                  "iconActive" : "icon-star",
                  "iconInactive" : "icon-star-outline",
                  "isActive" : true
                  }, {
                  "iconActive" : "icon-star",
                  "iconInactive" : "icon-star-outline",
                  "isActive" : true
                  },{
                  "iconActive" : "icon-star",
                  "iconInactive" : "icon-star-outline",
                  "isActive" : true
                  }, {
                  "iconActive" : "icon-star",
                  "iconInactive" : "icon-star-outline",
                  "isActive" : true
                  }, {
                  "iconActive" : "icon-star",
                  "iconInactive" : "icon-star-outline",
                  "isActive" : true
                  }
              ]
            },
            {
                id:2,
                service: 'Mecánico',
                title: 'mec 2',
                titleDescription: 'descripción...',
                reviews: 'algo aquí',
                contentTitle: 'contenido de titulo',
                contentDescription: 'descripción',
                address: 'dirección ...',
                schedule: 'horario',
                phone: 'telefono',
                website: 'string',
                email: 'string',
                lat: 20.0742486 ,
                lng: -98.790892,
                markLabel:'',
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl:"../assets/mapicons/gears.png",
                iconsStars : [ 
                    {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    },{
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }
                ]
            },
            {
                id:4,
                service: 'Mecánico',
                title: 'mec XX',
                titleDescription: 'descripción...',
                reviews: 'algo aquí',
                contentTitle: 'contenido de titulo',
                contentDescription: 'descripción',
                address: 'dirección ...',
                schedule: 'horario',
                phone: 'telefono',
                website: 'string',
                email: 'string',
                lat: 20.0730022 ,
                lng: -98.790022,
                markLabel:'',
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl:"../assets/mapicons/gears.png",
                iconsStars : [ 
                    {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    },{
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }
                ]
            },
            {
                id:3,
                service: 'Cerrajero',
                title: 'Cerra',
                titleDescription: 'llaves y mas...',
                reviews: 'algo aquí',
                contentTitle: 'contenido de titulo',
                contentDescription: 'descripción',
                address: 'dirección ...',
                schedule: 'horario',
                phone: 'telefono',
                website: 'string',
                email: 'string',
                lat: 20.06624 ,
                lng: -98.7908,
                markLabel:'',
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl:"../assets/mapicons/key.png",
                iconsStars : [ 
                    {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    },{
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }, {
                    "iconActive" : "icon-star",
                    "iconInactive" : "icon-star-outline",
                    "isActive" : true
                    }
                ]
            }
        ];      
    }

    getPosition(){
        return this.geolocation.getCurrentPosition();
    }

    watchPos(){
        return this.geolocation.watchPosition().subscribe((data)=>{
            console.log('watch',data);
        })
    }

}