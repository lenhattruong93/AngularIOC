import {ResourceService} from "../../../modules/common/services/resourceService";
import {ConnectorService} from "../../../modules/common/services/connectorService";
let iocRegistrations : Array<IIoCRegistration>=[
    {name:"ResourceService", instanceOf: ResourceService},
    {name:"ConnectorService", instanceOf: ConnectorService}
];
export default iocRegistrations;