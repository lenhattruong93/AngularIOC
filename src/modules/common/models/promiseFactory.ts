import {Promise} from "./promise";
export class PromiseFactory{
    public static create():Promise{
        return new Promise();
    }
}