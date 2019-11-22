import { ICourseService } from "./icourseService";
import { Promise } from "@app/common";
import { PromiseFactory } from "@app/common";
import { IConnector } from "@app/common";
import { IoCNames } from "@app/common";
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
