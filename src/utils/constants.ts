export namespace Constants {
    // const HOST: string = "https://autocar.gigalixirapp.com/";
    const HOST: string = "http://localhost:4000/";
    export const SUPPLIERS_URL: string = HOST + "api/providers/service";
    export const CREATE_SUPPLIER_URL: string = HOST + "api/users";
    export const UPDATE_SUPPLIER_URL: string = HOST + "api/provider/update/";
    export const CREATE_USER_URL: string = HOST + "api/users/create";
    export const SERVICES_URL: string = HOST + "api/services";
    export const MAIN_SERVICES_URL: string = HOST + "api/mainservices";
    export const EMAIL_URL: string = HOST + "api/email/users";
    export const LOGIN_URL: string = HOST + "api/auth";
    export const LOGGED_USER_URL: string = HOST + "api/logged/user";
    export const USER_BY_ID: string = HOST + "api/user";
    export const SERVICES_BY_USER_ID: string = HOST + "api/providers/user";
    export const CREATE_REQUEST: string = HOST + "api/users";
    export const UPDATE_REQUEST: string = HOST + "api/CMS/request/update/";
    export const GET_REQUEST: string = HOST + "api/users/";
    export const UPDATE_USER: string = HOST + "api/users/";
    export const GET_REQUEST_PROVIDER: string = HOST + "provider/";
    export const USERS_PROVIDERS: string = HOST + "api/user/providers/";
    export const USERS_PROVIDERS_IDS: string = HOST + "api/user/providers/getids/";
    export const UPLOAD_IMG: string = HOST + "api/uploader/image";
    export const UPLOAD_ONE_IMG: string = HOST + "api/uploader/img";
    export const CREATE_ATTACHMENT: string = HOST + "api/attachments/create";
    export const GET_FULL_USER: string = HOST + "api/user/full/";
    export const PROVIDER_CUSTOMER: string = HOST + "api/provider/customer/";
    export const CREATE_PROPOSAL: string = HOST + "api/CMS/proposal/create";
    export const GET_PROVIDER: string = HOST + "api/provider/";
    export const RATE_PROVIDER: string = HOST + "api/provider/rate/";
    export const PROVIDERS_DISTANCE: string = HOST + "api/providers/distance";
    export const PROVIDERS_DISTANCE_FULL: string = HOST + "api/providers/distance/full";
    export const CREATE_MULT_REQUEST: string = HOST + "api/CMS/request/multiple/create";
    export const GET_NOTIFICATIONS: string = HOST + "api/user/notification/";
    export const NOTIFY_DELAY: number = 180000; //3 min 
    // export const NOTIFY_DELAY: number = 300000; //5 min 

    export const SPINNER: string = "puff"; // puede ser "puff" o "ball-triangle"
}