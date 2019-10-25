System.register(["../../../modules/common/services/resourceService", "../../../modules/common/services/connectorService"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var resourceService_1, connectorService_1, iocRegistrations;
    return {
        setters: [
            function (resourceService_1_1) {
                resourceService_1 = resourceService_1_1;
            },
            function (connectorService_1_1) {
                connectorService_1 = connectorService_1_1;
            }
        ],
        execute: function () {
            iocRegistrations = [
                { name: "ResourceService", instanceOf: resourceService_1.ResourceService, lifecycle: "Singleton" },
                { name: "ConnectorService", instanceOf: connectorService_1.ConnectorService, lifecycle: "Transient" }
            ];
            exports_1("default", iocRegistrations);
        }
    };
});
//# sourceMappingURL=ioc.js.map