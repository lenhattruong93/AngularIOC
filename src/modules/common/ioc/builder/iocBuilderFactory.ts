import { IoCTransientBuilder } from "./iocTransientBuilder";
//import { IoCTransientBuilder } from "@app/common";
import { IoCSingletonBuilder } from "./iocSingletonBuilder";
import { IBuilder } from "./ibuilder";
import {IoCLifecycle} from "../../enum";

export class IoCBuilderFactory{
    public static create(item:IIoCRegistration):IBuilder{
            switch(item.lifecycle){
                case IoCLifecycle.Transient: 
                    return new IoCTransientBuilder(item);
                case IoCLifecycle.Singleton: 
                    return new IoCSingletonBuilder(item);
            }
    }
}