declare interface Window{
    ioc:IIoCContainer;
}
declare interface IIoCContainer{
    import(registrations:Array<IIoCRegistration>):void;
    resolve(name:string|any):any;
    setInjector(injector:any):void;
}
declare interface IIoCRegistration{
    name:string;
    instanceOf:any;
}