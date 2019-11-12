import { Component } from "@angular/core";
import { BasePage } from "../../common/basepage";
import { ICourseService } from "../_share/services/icourseService";
import { IoCNames } from "../../common/enum";
import { Router } from "@angular/router";
import { EventManager } from "@angular/platform-browser";
import { IEventManager } from "../../common/services/ieventManager";

@Component({
template:`
<page [title]="i18n.learning.pages.addCourse.title_">
    <page-content>
        <form-horizontal>
            <form-input
                [validation]="['learning.pages.addCourse.titleWasRequired']"
                [label]="i18n.learning.pages.addCourse.title"
                (onValueChange)="onTitleChanged($event)"
            ></form-input>
            <form-input [label]="i18n.learning.pages.addCourse.description"
                (onValueChange)="onDescChanged($event)"
            ></form-input>
            <form-buttons>
                <btn-default [label]="i18n.learning.common.cancel"></btn-default>
                <btn-primary (click)="onSaveClicked()" [label]="i18n.learning.common.save"></btn-primary>
            </form-buttons>
        </form-horizontal>
    </page-content>
</page>
        
`
})
export class AddCourse extends BasePage{
    public model:any={};
    public router:Router;
    constructor(router :Router ){
        super();
        this.router= router;
    }
    public onTitleChanged(newVl:string):void{  
            this.model.title=newVl;
    }
    public onDescChanged(newVl:string):void{
            this.model.description=newVl;
    }
    public onSaveClicked():void{
        let self=this;
        let eventManager: IEventManager = window.ioc.resolve(IoCNames.EventManagerService);
        // if(!self.model.title){
        //     eventManager.publish("learning.page.addCourse.titleWasRequired");
        //     return;
        // }
        let courseservice:ICourseService = window.ioc.resolve(IoCNames.CourseService);
        courseservice.addCourse(this.model).then(()=>{
            self.router.navigate(["learning/courses"]);
        });

    }

}