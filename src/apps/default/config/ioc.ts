import {ResourceService} from "../../../modules/common/services/resourceService";
import {ConnectorService} from "../../../modules/common/services/connectorService";
let iocRegistrations : Array<IIoCRegistration>=[
    {name:"ResourceService", instanceOf: ResourceService,lifecycle:"Singleton"},
    {name:"ConnectorService", instanceOf: ConnectorService,lifecycle:"Transient"}
];
export default iocRegistrations;