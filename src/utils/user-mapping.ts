export class UserMapping {
    arrangeData(formData: any = {}, profile) {
        delete formData.cPassword;
        formData.profile = profile;
        return formData;
    }
}