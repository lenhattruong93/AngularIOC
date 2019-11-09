import { Promise } from "../models/promise";
import { PromiseFactory } from "../models/promiseFactory";
import {Http} from "@angular/http";
import "rxjs/add/operator/map" ;
import { IConnector } from "./iconnector";

export class ConnectorService implements IConnector{
    public get(uri:string):Promise{
        let def:Promise= PromiseFactory.create();
        let http:Http= window.ioc.resolve(Http);
        http.get(uri)
            .map((respone:any)=>{return respone.json();})
            .subscribe((json:any)=>{def.resolve(json);});
        return def;
    }
    public post(uri:string,model:any):Promise{
        let def:Promise= PromiseFactory.create();
        let http:Http=window.ioc.resolve(Http);
        http.post(uri,model)
        .map((respone:any)=>{return respone.json();})
        .subscribe((json:any)=>{def.resolve(json);});
        return def;
    };
}