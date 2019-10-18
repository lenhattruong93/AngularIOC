import {IResourceService} from "./services/iresourceService";
export class BasePage{
    public i18n:any;
    constructor(){
        let local: IResourceService = window.ioc.resolve("ResourceService");
        this.i18n = local.getLocales();
    }
}