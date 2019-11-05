import { Component } from "@angular/core";
import {BasePage} from "../../common/basePage";
import {ICourseService} from "../../learning/_share/services/icourseService";
import {IoCNames} from "../../common/enum";
@Component({
    template:`
    <page [title]="i18n.learning.pages.courses.title_">
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

    public courses:Array<any>;
    constructor(){
        super();
        let self = this;
        let courseService:ICourseService = window.ioc.resolve(IoCNames.CourseService); 
        courseService.getCourses().then((data:any)=>{
            self.courses = data;
        });
    }
 
}