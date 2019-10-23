import { NgModule, Injector, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutes } from "./appRoutes";
import { Layout } from "./layout";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { IResourceService } from "./modules/common/services/iresourceService";
import { HttpModule } from "@angular/http";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutes,
        RouterModule,
        CommonModule,
        HttpModule,
    ],
    declarations: [Layout],
    //bootstrap: [Layout]
    entryComponents:[Layout]
})
export class AppModule {
    private appRef:ApplicationRef;
    constructor(injector: Injector, appRef:ApplicationRef){
        window.ioc.setInjector(injector);
        this.appRef=appRef;     
    }
    ngDoBootstrap():void{
        let resource : IResourceService = window.ioc.resolve("ResourceService");
        let self = this;
        resource.loadLocale("learning").then(()=>{
            self.appRef.bootstrap(Layout);
        });
    }
 }