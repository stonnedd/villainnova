
export class SupplierModel {

    constructor(
        id:number,
        title: string,
        titleDescription: string,
        reviews: string,
        contentTitle: string,
        contentDescription: string,
        address: string,
        schedule: string,
        phone: string,
        website: string,
        email: string,
        lat: number,
        lng: number,
        zoom: number,
        mapTypeControl: true,
        streetViewControl: true,
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
    ){}

}


   


