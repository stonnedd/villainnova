import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AutoserviceService } from '../../service/autoservice-service';
import { SupplierModel} from '../../models/supplierModel';
import { PopoverController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-autoservice',
  templateUrl: 'autoservice.html',
  providers:[AutoserviceService]
  
})
export class AutoservicePage {
  params: any={};
  usrPos: any={};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public AsSvc: AutoserviceService,
    public popCtrl: PopoverController){
    this.params.data = {};
    this.params.suppliers=[];
    this.params.mapData={};
    this.params.events={
      'onLike': function(item: any) {
        console.log("Like");
      },
      'onFavorite': function(item: any) {
        if (item) {
            item.favorite = !item.favorite;
        }
      },
      'onShare': function(item: any) {
              console.log("Share");
      },
      'onSkipPrevious': function(item: any) {
              console.log("Skip Previous");
      },
      'onPlay': function(item: any) {
              console.log("Play");
      },
      'onSkipNext': function(item: any) {
              console.log("Skip Next");
      },
      'onFab': function(item: any) {
              console.log("Fab");
      },
      'onRates' : function(index: number) {
          console.log("Rates " + (index+1));
      },
      'onItemClick': function(item: any) {
              console.log(item.title);
      },
      'onMarker': function(item: any={}) {
              console.log(item);

      }
    }
      
    this.params.userData={
      userPos:{
        lat: 0,
        lng: 0,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
      }
    }
  }
  
  serviceIsSelected(chosenService){
    console.log('ocpión::', chosenService); 
    this.params.suppliers=this.AsSvc.getSuppliers().filter(
      data=>{
        for (var i = 0; i<chosenService.length; i++) {
          if(data.service===chosenService[i]){
            return true;
          }      
        }
      }
    );
    console.log('proveedores:',this.params.suppliers);
  }

  onMarkerService(params){
    console.log('params:',params);
    this.params.data=params;
    this.params.mapData.lat=params.lat;
    this.params.mapData.lng=params.lng;

  }

  ionViewDidLoad() {
  }

  ngOnInit(){
    this.params.services=this.AsSvc.getServices();
    this.AsSvc.getPosition().then((userPosition)=>{
      this.fillUsrData(userPosition);
      console.log(userPosition.coords);
    })
  }

  fillUsrData(usrPosition: any){
    this.params.userData={
      userPos:{
        lat: usrPosition.coords.latitude,
        lng: usrPosition.coords.longitude,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        iconUrl:'../assets/mapicons/you.png'
      }
    }
    this.params.mapData.lat=usrPosition.coords.latitude;
    this.params.mapData.lng=usrPosition.coords.longitude;
  }

  showSettings(event){
    let popover = this.popCtrl.create(SettingsPage);
    popover.present({
      ev: event
    });
  }
  
}
