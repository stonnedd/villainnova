import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs"; 

/**
 *    update(): any {
     throw new Error("Method not implemented.");
   }
A simple settings/config class for storing key/value pairs with persistence.
 */

 @Injectable()
export class Settings {
  private SETTINGS_KEY: string = "_settings";
  settings: any = null;
  _defaults: any;
  _readyPromise: Promise<any>;

  settingsObservable: Observable<any> = 
  Observable.fromPromise(this.storage.get(this.SETTINGS_KEY)
        .then((value) => {
           if (value) {
              this.settings = value;
              return this._mergeDefaults(this._defaults);
           } else {
              return this.setAll(this._defaults).then((val) => {
                 this.settings = val;
              });
           }
        }),
  ).share();
  
  constructor(public storage: Storage, defaults: any) {
    this._defaults = defaults;
  }



  load() {
    return this.storage.get(this.SETTINGS_KEY).then((value) => {
      if (value) {
        this.settings = value;
        return this._mergeDefaults(this._defaults);
      } else {
        return this.setAll(this._defaults).then((val) => {
          this.settings = val;
        });
      }
    });
  }

  _mergeDefaults(defaults: any) {
    for (let k in defaults) {
      if (!(k in this.settings)) {
        this.settings[k] = defaults[k];
      }
    }
    return this.setAll(this.settings);
  }

  merge(settings: any) {
    for (let k in settings) {
      this.settings[k] = settings[k];
    }
    return this.save();
  }

  setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.set(this.SETTINGS_KEY, this.settings);
  }

  removeValue(key: string) {
    return this.storage.remove(key);
  }

  update(key: string, value) {
    this.storage.ready().then(
      () => this.storage.remove(key).then(
        () => {
          this.setValue(key, value);
       } ),
    );
  }

  clear() {
    this.storage.clear().then(
      () => console.log("clean"),
    );
  }

  setAll(value: any) {
    return this.storage.set(this.SETTINGS_KEY, value);
  }

  getValue(key: string) {
    return this.storage.get(this.SETTINGS_KEY)
      .then(settings => {
        return settings[key];
      });
  }

  save() {
    return this.setAll(this.settings);
  }

  get allSettings() {
    return this.settings;
  }
}
