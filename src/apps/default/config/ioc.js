System.register(["../../../modules/common/services/resourceService", "../../../modules/common/services/connectorService", "../../../modules/common/enum", "../../../modules/learning/_share/services/courseService"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var resourceService_1, connectorService_1, enum_1, courseService_1, iocRegistrations;
    return {
        setters: [
            function (resourceService_1_1) {
                resourceService_1 = resourceService_1_1;
            },
            function (connectorService_1_1) {
                connectorService_1 = connectorService_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (courseService_1_1) {
                courseService_1 = courseService_1_1;
            }
        ],
        execute: function () {
            iocRegistrations = [
                { name: "ResourceService", instanceOf: resourceService_1.ResourceService, lifecycle: enum_1.IoCLifecycle.Singleton },
                { name: enum_1.IoCNames.CourseService, instanceOf: courseService_1.CourseService, lifecycle: enum_1.IoCLifecycle.Transient },
                { name: enum_1.IoCNames.ConnectorService, instanceOf: connectorService_1.ConnectorService, lifecycle: enum_1.IoCLifecycle.Transient }
            ];
            exports_1("default", iocRegistrations);
        }
    };
});
//# sourceMappingURL=ioc.js.map