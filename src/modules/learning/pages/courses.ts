import { Component } from "@angular/core";
import {BasePage} from "@app/common";
import {ICourseService} from "../../learning/_share/services/icourseService";
import {IoCNames} from "@app/common";
import { Router } from "@angular/router";
@Component({
    template:`
<page [title]="i18n.learning.pages.courses.title_">
     <page-command>
        <i class="fa fa-2x fa-plus" (click)='onAddNewCourseClicked()'></i>
     </page-command>
     <page-content>
            <table class="table">
                <thead>
                    <tr>
                        <th>{{i18n.learning.pages.courses.id}}</th>
                        <th>{{i18n.learning.pages.courses.title}}</th>
                        <th>{{i18n.learning.pages.courses.description}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor='let item of courses'>
                        <td>{{item.id}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.description}}</td>
                    </tr>
                </tbody>
        </table>  
    </page-content> 
</page>
    `
})
export class Courses extends BasePage {
    private router:Router;
    public courses:Array<any>;
    constructor(router:Router){
        super();
        this.router=router;
        let self = this;
        let courseService:ICourseService = window.ioc.resolve(IoCNames.CourseService); 
        courseService.getCourses().then((data:any)=>{
            self.courses = data;    
        });
    }
    public onAddNewCourseClicked():void{
      this.router.navigate(['learning/addcourse']);
    }
 
}