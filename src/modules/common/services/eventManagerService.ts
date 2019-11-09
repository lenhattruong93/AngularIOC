import { IEventManager } from "./ieventManager";

export class EventManagerService implements IEventManager {
    public registration: any = {};
    public subscribe(item:string, func:()=>void):void{
        let self=this;
        self.registration[item] = func;
    }
    public publish(item:string):void{
        let self=this;
        let _func = self.registration[item];
        if(!!_func){
            _func();
        }
        
    }
}