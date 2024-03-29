import {ResourceService} from "../../../modules/common/services/resourceService";
import {ConnectorService} from "../../../modules/common/services/connectorService";
import { IoCLifecycle, IoCNames } from "../../../modules/common/enum";
import {CourseService} from "../../../modules/learning/_share/services/courseService"; 
import {EventManagerService} from "../../../modules/common/services/eventManagerService";
let iocRegistrations : Array<IIoCRegistration>=[
    {name:"ResourceService", instanceOf: ResourceService,lifecycle:IoCLifecycle.Singleton},
    {name:IoCNames.CourseService, instanceOf: CourseService, lifecycle:IoCLifecycle.Transient},
    {name:IoCNames.ConnectorService, instanceOf: ConnectorService, lifecycle:IoCLifecycle.Transient },
    {name:IoCNames.EventManagerService, instanceOf: EventManagerService, lifecycle: IoCLifecycle.Singleton}
];
export default iocRegistrations;