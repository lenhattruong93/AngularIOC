import { ICourseService } from "./icourseService";
import { Promise } from "../../../common/models/promise";
import { PromiseFactory } from "../../../common/models/promiseFactory";
import { IConnector } from "../../../common/services/iconnector";
import { IoCNames } from "../../../common/enum";
export class CourseService implements ICourseService{
    public getCourses():Promise {
        let def: Promise = PromiseFactory.create();
        let uri:string = "http://group02.com/rest/api/courses";
        let iconnector:IConnector = window.ioc.resolve(IoCNames.ConnectorService);
        iconnector.get(uri).then((data:any)=>{
            def.resolve(data);
        });
        return def;
    }
    public addCourse(model:any):Promise{
        let def:Promise = PromiseFactory.create();
        let uri:string="http://group02.com/rest/api/courses/addcourse";
        let iconnector:IConnector = window.ioc.resolve(IoCNames.ConnectorService);
        iconnector.post(uri,model).then(()=>{
            def.resolve()
        });
        return def;
    }
}
