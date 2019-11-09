System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IoCLifecycle, IoCNames;
    return {
        setters: [],
        execute: function () {
            (function (IoCLifecycle) {
                IoCLifecycle[IoCLifecycle["Singleton"] = 1] = "Singleton";
                IoCLifecycle[IoCLifecycle["Transient"] = 2] = "Transient";
            })(IoCLifecycle || (IoCLifecycle = {}));
            exports_1("IoCLifecycle", IoCLifecycle);
            (function (IoCNames) {
                IoCNames["CourseService"] = "CourseService";
                IoCNames["ConnectorService"] = "ConnectorService";
                IoCNames["EventManagerService"] = "EventManagerService";
            })(IoCNames || (IoCNames = {}));
            exports_1("IoCNames", IoCNames);
        }
    };
});
//# sourceMappingURL=enum.js.map