import { IoCTransientBuilder } from "./iocTransientBuilder";
import { IoCSingletonBuilder } from "./iocSingletonBuilder";
import { IBuilder } from "./ibuilder";

export class IoCBuilderFactory{
    public static create(item:IIoCRegistration):IBuilder{
            switch(item.lifecycle){
                case "Transient": 
                    return new IoCTransientBuilder(item);
                case "Singleton": 
                    return new IoCSingletonBuilder(item);
            }
    }
}