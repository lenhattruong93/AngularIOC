import {Promise} from "../../../common/models/promise";
export interface ICourseService{
    getCourses():Promise;
    addCourse(model:any):Promise;
}