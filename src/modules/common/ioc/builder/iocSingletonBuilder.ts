import { IBuilder } from "./ibuilder";

export class IoCSingletonBuilder implements IBuilder{
    private item:IIoCRegistration;
    constructor(item:IIoCRegistration){
        this.item=item;
    }
    public build():void{
        if (!this.item.instance) {
            this.item.instance = new this.item.instanceOf();
        }
        return this.item.instance;
    }
}