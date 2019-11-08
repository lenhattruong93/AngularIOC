import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {Courses} from "./pages/courses";
import {AppCommonModule} from "../common/appCommonModule"
import { CommonModule } from "@angular/common";
import {AddCourse} from "./pages/addCourse";
let routes : Routes=[
    {path:"",redirectTo:"courses",pathMatch:"full"},
    {path:"courses",component:Courses},
    {path:"addcourse",component:AddCourse}
];
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes),AppCommonModule],
    declarations:[Courses,AddCourse]
})
export class LearningRoutes{}