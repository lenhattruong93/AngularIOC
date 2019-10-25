import { Injector } from "@angular/core";
import {IoCTransientBuilder} from "./builder/iocTransientBuilder";
import {IoCSingletonBuilder} from "./builder/iocSingletonBuilder";
import {IBuilder} from "./builder/ibuilder";
import { IoCBuilderFactory } from "./builder/iocBuilderFactory";
export class IoCContainerFactory {
    public static create(): IIoCContainer {
        return new IoCContainer();
    }

}

class IoCContainer implements IIoCContainer {
    private iocRegs: Array<IIoCRegistration>;
    private injector: Injector;
    public import(iocRegs_: Array<IIoCRegistration>): void {
        this.iocRegs = iocRegs_;
    }
    public resolve(name: string | any): any {
        if (typeof name != "string") {
            return this.injector.get(name);
        }
        let localItem: IIoCRegistration;
        this.iocRegs.forEach((item: IIoCRegistration) => {
            if (item.name == name) {
                localItem = item;
            }
        });
        if (!!localItem) {
            
            // if (localItem.lifecycle == "Transient") {
            //   builder = new IoCTransientBuilder(localItem);
               
            //     // return new localItem.instanceOf();
            // }
            // if (localItem.lifecycle == "Singleton") {
            //      builder = new IoCSingletonBuilder(localItem);
            //   //  return builder.build();
            //     // if (!localItem.instance) {
            //     //     localItem.instance = new localItem.instanceOf();
            //     // }
            //     // return localItem.instance;
            // }

            let builder: IBuilder = IoCBuilderFactory.create(localItem);
            // switch(localItem.lifecycle){
            //     case "Transient": 
            //         builder = new IoCTransientBuilder(localItem);
            //         break;
            //     case "Singleton": 
            //         builder = new IoCSingletonBuilder(localItem);
            //         break;
                
            // }
             return builder.build();
        }

    }

    public setInjector(injector: any): void {
        this.injector = injector;
    }

}

