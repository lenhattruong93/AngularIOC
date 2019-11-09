export interface IEventManager{
    subscribe(item:string, func:()=>void):void;
    publish(item:string):void;
}