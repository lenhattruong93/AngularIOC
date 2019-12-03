import { Component } from "@angular/core";
import { BasePage } from "@app/common"; // fix
import { ICourseService } from "../_share/services/icourseService";
import { IoCNames } from "@app/common";
import { Router } from "@angular/router";
import { IEventManager } from "@app/common";
import {required} from "@app/common";
import {BaseModel} from "@app/common";
//import { IoCTransientBuilder } from "@app/common";
//import {BtnDefault} from "@app/common";
@Component({
template:`
<page [title]="i18n.learning.pages.addCourse.title_">
    <page-content>
        <form-horizontal>
            <form-input
                [validation]="['learning.pages.addCourse.titleWasRequired']"
                [label]="i18n.learning.pages.addCourse.title"
                [(model)]="model.title"
            ></form-input>
            <form-input [label]="i18n.learning.pages.addCourse.description"
                [(model)]="model.description"
            
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
    public model:AddCourseModel;
    public router:Router;
    constructor(router :Router ){
        super();
        this.router= router;
        this.model= new AddCourseModel();
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
        if(!this.model.isValid()){return;}
        let courseservice:ICourseService = window.ioc.resolve(IoCNames.CourseService);
        courseservice.addCourse(this.model).then(()=>{
            self.router.navigate(["learning/courses"]);
        });
    }
}
class AddCourseModel extends BaseModel{
    @required("learning.pages.addCourse.titleWasRequired")
    public title:string;
    public  description:string="";   
    constructor(){
        super();
        this.title="";
        this.description="";;
    }
}
 