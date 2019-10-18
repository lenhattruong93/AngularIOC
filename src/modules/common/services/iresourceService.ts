import {Promise} from "../../common/models/promise";
export interface IResourceService{
    getLocales():any;
    loadLocale(nameLocale:string):Promise;
}