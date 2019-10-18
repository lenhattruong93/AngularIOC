import { Injector } from "@angular/core";

export class IoCContainerFactory{
    public static create():IIoCContainer{
        return new IoCContainer();
    }

}
class IoCContainer implements IIoCContainer {
    private iocRegs:Array<IIoCRegistration>;
    private injector:Injector;
    public import(iocRegs_:Array<IIoCRegistration>):void{
        this.iocRegs=iocRegs_;
    }
    public resolve(name:string|any):any{
        if(typeof name != "string" ){
            return this.injector.get(name);
        }
        
        this.iocRegs.forEach((item:IIoCRegistration)=>{
            if(item.name == name){
                return new item.instanceOf();
            }
        });
    }
    public setInjector(injector:any):void{
        this.injector= injector;
    }
    
}