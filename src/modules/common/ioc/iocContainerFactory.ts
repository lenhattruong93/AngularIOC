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
        let localItem:IIoCRegistration;
        this.iocRegs.forEach((item:IIoCRegistration)=>{
            if(item.name == name){
               localItem = item;
            }
        });
        if(!!localItem){
            if(localItem.lifecycle=="Transient"){
                return new localItem.instanceOf();
            }
            if(localItem.lifecycle=="Singleton"){
                if(!localItem.instance){
                    localItem.instance = new localItem.instanceOf();
                 }  
                 return localItem.instance;         
         }

           }
                
    }
    public setInjector(injector:any):void{
        this.injector= injector;
    }
    
}