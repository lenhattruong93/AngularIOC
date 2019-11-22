import {Promise} from "@app/common";
export interface ICourseService{
    getCourses():Promise;
    addCourse(model:any):Promise;
}