export namespace Constants {
    const HOST: string = "http://localhost:4000/";
    export const SUPPLIERS_URL: string = "http://localhost:4000/api/providers/service";
    export const CREATE_SUPPLIER_URL: string = "http://localhost:4000/api/users";
    export const UPDATE_SUPPLIER_URL: string = "http://localhost:4000/api/provider/update/";
    export const CREATE_USER_URL: string = "http://localhost:4000/api/users/create";
    export const SERVICES_URL: string = "http://localhost:4000/api/services";
    export const MAIN_SERVICES_URL: string = "http://localhost:4000/api/mainservices";
    export const EMAIL_URL: string = "http://localhost:4000/api/email/users";
    export const LOGIN_URL: string = "http://localhost:4000/api/auth";
    export const LOGGED_USER_URL: string = "http://localhost:4000/api/logged/user";
    export const USER_BY_ID: string = "http://localhost:4000/api/user";
    export const SERVICES_BY_USER_ID: string = "http://localhost:4000/api/providers/user";
    export const CREATE_REQUEST: string = "http://localhost:4000/api/users";
    export const UPDATE_REQUEST: string = HOST + "api/CMS/request/update/";
    export const GET_REQUEST: string = HOST + "api/users/";
    export const GET_REQUEST_PROVIDER: string = HOST + "provider/";
    export const USERS_PROVIDERS: string = HOST + "/api/user/providers/";
    export const UPLOAD_IMG: string = "http://localhost:4000/api/uploader/image";
    export const CREATE_ATTACHMENT: string = "http://localhost:4000/api/attachments/create";
    export const GET_FULL_USER: string = HOST + "api/user/full/";
    export const PROVIDER_CUSTOMER: string = HOST + "api/provider/customer/";
    export const SPINNER: string = "puff"; // puede ser "puff" o "ball-triangle"
}