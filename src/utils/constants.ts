export namespace Constants {
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
    export const GET_REQUEST_PROVIDER: string = HOST + "provider/";
    export const USERS_PROVIDERS: string = HOST + "api/user/providers/";
    export const UPLOAD_IMG: string = HOST + "api/uploader/image";
    export const CREATE_ATTACHMENT: string = HOST + "api/attachments/create";
    export const GET_FULL_USER: string = HOST + "api/user/full/";
    export const PROVIDER_CUSTOMER: string = HOST + "api/provider/customer/";
    export const CREATE_PROPOSAL: string = HOST + "api/CMS/proposal/create";
    export const GET_PROVIDER: string = HOST + "api/provider/";
    export const RATE_PROVIDER: string = HOST + "api/provider/rate/";

    export const SPINNER: string = "puff"; // puede ser "puff" o "ball-triangle"
}