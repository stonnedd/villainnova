import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'maps-layout-1',
    templateUrl: 'maps.html'
})

export class MapsLayout1 {
    @Input() data: any;
    @Input() events: any;
    @Input() userData: any;
    @Input() services: string[];
    @Input() suppliers: any;
    @Input() mapData: any;
    @Output() onMarkerService = new EventEmitter <any> ();
    @Output() serviceIsSelected = new EventEmitter <string>();
    
    selectedService: any;
    labelService: string;
    markerSelected: boolean = false;
    serviceSelected: boolean= false;
    supplierSelected: boolean= false;
    mapZoom: number = 14;
    value1: any= '#ffffff';

    constructor() { }
    
    
    onEvent(event: string, e: any) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log('evento:',event);
        if(event!="onRates"){
            this.onMarkerService.emit(e);
            this.markerSelected=true;
            this.supplierSelected=false;
            this.mapZoom=15;
        }
    }
    
    
        
        
    

    svcSelected():void{
        this.serviceIsSelected.emit(this.selectedService);
        this.serviceSelected=true;
        this.supplierSelected=true;
        this.markerSelected=false;
        if(this.selectedService.length===1){
            this.labelService = this.selectedService[0];
        }else{
            this.labelService="una opción";
        }
        this.mapZoom=13;
        console.log('long:',this.selectedService.length);
        console.log('slc:',this.selectedService);
    }

    onStarClass(items: any, index: number, e: any) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates",  e);
    };

    dropDown(){
        this.markerSelected=false;
        console.log("click en icono");
    }

    


}