import { Promise } from "../models/promise";
import { PromiseFactory } from "../models/promiseFactory";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map" ;
import { IConnector } from "./iconnector";
import { IoCNames } from "../enum";
import { IEventManager } from "./ieventManager";

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
        let headers : Headers = new Headers();
        headers.append("content-type","application/json");
        let def:Promise= PromiseFactory.create();
        let http:Http=window.ioc.resolve(Http);
        http.post(uri,JSON.stringify(model),{headers:headers}) // Goi ham toJson se duoc goi neu co
        .map((respone:any)=>{return respone.json();})
        .subscribe((json:any)=>{
            if(json && json.errorKeys && json.errorKeys.length > 0){
                let eventManager:IEventManager = window.ioc.resolve(IoCNames.EventManagerService);
                json.errorKeys.forEach((errorKey:any) => {
                    eventManager.publish(errorKey);
                });
                return;
            }
            def.resolve(json);
        });
        return def;
    };
}