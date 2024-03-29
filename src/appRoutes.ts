import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
let routes: Routes = [
    {path:"",redirectTo:"learning",pathMatch:"full"},
    {path:"learning",loadChildren:"src/modules/learning/learningModule.js#LearningModule"}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }