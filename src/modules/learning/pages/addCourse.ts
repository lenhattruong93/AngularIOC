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
    public model:AddCourseModel= new AddCourseModel();
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
        if(!this.model.isValid()){return;}
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
class AddCourseModel extends BaseModel{
    @required("learning.pages.addCourse.titleWasRequired")
    public title:string;
   // @required()
    // public title1:string;
    // @required()
    // public title2:string;

    // @required()
    // public title3:string;

   public  description:string="fdfas342234dfasf";
//    public  description2:string="fdfasd242fasf";
//    public  description3:string="fdfasd243243432fasf";
//    public  description5:string="fdfas324342dfasf";
    //private  __validation:Array<any>=[];
    public isValid():boolean{
        if(Object.keys(this["__validation"]||{}).length==0){return true;} // A && B && C hoac A || B || C
        let ieventManager :IEventManager = window.ioc.resolve(IoCNames.EventManagerService);
        let __valArray = this["__validation"];
        for(let item in __valArray){
            ieventManager.publish( __valArray[item]);    
        }
    }
   
}
// let model = new AddCourseModel();
// console.log(model.isValid())
// model.title="";
// console.log(model.isValid());
// model.title="adfabfag";
// console.log(model.isValid());
