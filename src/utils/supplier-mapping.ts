export class SupplierMapping {
    userForm: any = {};
    supplierForm: any = {};
    splitForm(form) {
        this.userForm.name = form.name;
        this.userForm.password = form.password;
        this.userForm.phone = form.phone;
        this.userForm.profile = "supplier";
        this.userForm.email = form.email;
        this.supplierForm.brands = form.brands;
        this.supplierForm.email = form.email;
        this.supplierForm.lat = form.lat;
        this.supplierForm.lng = form.lng;
        this.supplierForm.company_name = form.company_name;
        this.supplierForm.address = form.address;
        this.supplierForm.map_icon = form.map_icon;
        this.supplierForm.aditional_phone = form.aditional_phone;
        this.supplierForm.ranking = form.ranking;
        this.supplierForm.schedule = form.schedule;
        this.supplierForm.service = form.service;
        this.supplierForm.specialty = form.specialty;
        this.supplierForm.website = form.website;
        this.supplierForm.is_active = form.is_active;
        return [this.userForm, this.supplierForm];
 }

    addMapIcon(formData: any= {}) {
        formData.map_icon = this.getIcon(formData.service);
        return formData;
    }

    getIcon(slcdService: string) {
        let iconList = new Map <string, string> ();
        iconList.set("Mecánico diesel", "mecd.png");
        iconList.set("Autolavado", "aul.png");
        iconList.set("Clima", "cli.png");
        iconList.set("Clutch y frenos", "clu.png");
        iconList.set("Eléctrico", "ele.png");
        iconList.set("Grúas", "gru.png");
        iconList.set("Llantas y neumáticos", "lla.png");
        iconList.set("Mecánico general", "mec.png");
        iconList.set("Taller especializado", "mece.png");
        iconList.set("Hojalatero", "hoj.png");
        iconList.set("Cerrajero", "key.png");
        iconList.set("Mofles", "mof.png");
        iconList.set("Parabrisas y vidrios", "par.png");
        iconList.set("Radiadores", "rad.png");
        iconList.set("Refaccionaria", "ref.png");
        iconList.set("Direccción y suspensión", "sus.png");
        iconList.set("Talachero", "tal.png");
        iconList.set("Alarmas y estereos", "ste.png");
        return iconList.get(slcdService);
    }

}