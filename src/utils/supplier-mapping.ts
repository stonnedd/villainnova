export class SupplierMapping {
    userForm: any = {};
    supplierForm: any = {};
    splitForm(form) {
        this.userForm.name = form.manager;
        this.userForm.password = form.password;
        this.userForm.phone = form.phone;
        this.userForm.profile = "supplier";
        this.userForm.email = form.email;
        this.supplierForm.brands = form.brands;
        this.supplierForm.email = form.email;
        this.supplierForm.lat = form.lat;
        this.supplierForm.lng = form.lng;
        this.supplierForm.manager = form.name;
        this.supplierForm.address = form.address;
        this.supplierForm.map_icon = form.map_icon;
        this.supplierForm.phone_manager = form.phone_manager;
        this.supplierForm.ranking = form.ranking;
        this.supplierForm.schedule = form.schedule;
        this.supplierForm.service = form.service;
        this.supplierForm.specialty = form.specialty;
        this.supplierForm.website = form.website;
        this.supplierForm.is_active = form.is_active;
        return [this.userForm, this.supplierForm];
 }

    arrangeData(formData: any= {}) {
        delete formData.cPassword;
        formData.map_icon = this.getIcon(formData.service);
        return formData;
    }

    getIcon(slcdService: string) {
        let iconList = new Map <string, string> ();
        iconList.set("Mecanico diesel", "mecd.png");
        iconList.set("Autolavado", "aul.png");
        iconList.set("Clima", "cli.png");
        iconList.set("Clutch y frenos", "clu.png");
        iconList.set("Electrico", "ele.png");
        iconList.set("Gruas", "gru.png");
        iconList.set("Llantas y Neumaticos", "lla.png");
        iconList.set("Mecanico General", "mec.png");
        iconList.set("Taller especializado", "mece.png");
        iconList.set("Hojalatero", "hoj.png");
        iconList.set("Cerrajero", "key.png");
        iconList.set("Mofles", "mof.png");
        iconList.set("Parabrisa y Vidrios", "par.png");
        iconList.set("Radiadores", "rad.png");
        iconList.set("Refacciones", "ref.png");
        iconList.set("Direcccion y suspension", "sus.png");
        iconList.set("Talachero", "sus.png");
        return iconList.get(slcdService);
    }

}