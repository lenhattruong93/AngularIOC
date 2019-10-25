import { IBuilder } from "./ibuilder";

export class IoCTransientBuilder implements IBuilder{
    private item:IIoCRegistration;
    constructor(item:IIoCRegistration){
        this.item=item;
    }
    public build():void{
        return new this.item.instanceOf();
    }
}