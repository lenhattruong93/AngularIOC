import { Component } from "@angular/core";
import {BasePage} from "@app/common";
import {ICourseService} from "../../learning/_share/services/icourseService";
import {IoCNames} from "@app/common";
import { Router } from "@angular/router";
import {IGridOption} from "../../common/component/grid/iGridOption";

@Component({
    template:`
<page [title]="i18n.learning.pages.courses.title_">
     <page-command>
        <i class="fa fa-2x fa-plus" (click)='onAddNewCourseClicked()'></i>
     </page-command>
     <page-content>
    <grid [options]="options"></grid>
    </page-content> 
</page>
    `
})
export class Courses extends BasePage {
    private router:Router;
    public courses:Array<any>;
    public options:IGridOption={
        dataSource:[{title:"column1", description:"column2"},
        {title:"columsegggefgdfn1", description:"colzvsdgdgdfumn2"},
        {title:"columdgfgddgn1", description:"coasaeaflumn2"},
        {title:"coluafefaewafewmn1", description:"cofewaewaaewlumn2"}],
        columns:[
            {headerText:this.i18n.learning.pages.courses.title, field:"title"},
            {headerText:this.i18n.learning.pages.courses.description, field:"description"}
        ]
    };
    constructor(router:Router){
        super();
        // this.options={
        //     dataSource:[{title:"column1", description:"column2"}],
        //     columns:[
        //         {headerText:this.i18n.learning.pages.courses.title, field:"title"},
        //         {headerText:this.i18n.learning.pages.courses.description, field:"description"}
        //     ]
        // };
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
