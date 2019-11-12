import { IResourceService } from "./iresourceService";
import {Promise} from "../models/promise";
import {PromiseFactory} from "../models/promiseFactory";
import {IConnector} from "../services/iconnector";
export class ResourceService implements IResourceService {
    public locales:any={};
    public getLocales():any {
        return this.locales;
    }
    public loadLocale(name:string):Promise{
        let def:Promise= PromiseFactory.create();
        let connector : IConnector = window.ioc.resolve("ConnectorService");
        let uri:string = "/src/resources/locales/"+name+".vn.json";
        connector.get(uri).then((json:any)=>{
            this.locales[name]=json;
            def.resolve();
        });
        return def;
    }
    

}