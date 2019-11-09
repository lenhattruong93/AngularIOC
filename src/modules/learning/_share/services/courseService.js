System.register(["../../../common/models/promiseFactory", "../../../common/enum"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promiseFactory_1, enum_1, CourseService;
    return {
        setters: [
            function (promiseFactory_1_1) {
                promiseFactory_1 = promiseFactory_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            CourseService = /** @class */ (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    var def = promiseFactory_1.PromiseFactory.create();
                    var uri = "http://group02.com/rest/api/courses";
                    var iconnector = window.ioc.resolve(enum_1.IoCNames.ConnectorService);
                    iconnector.get(uri).then(function (data) {
                        def.resolve(data);
                    });
                    return def;
                };
                CourseService.prototype.addCourse = function (model) {
                    var def = promiseFactory_1.PromiseFactory.create();
                    var uri = "http://group02.com/rest/api/courses/addcourse";
                    var iconnector = window.ioc.resolve(enum_1.IoCNames.ConnectorService);
                    iconnector.post(uri, model).then(function () {
                        def.resolve();
                    });
                    return def;
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    };
});
//# sourceMappingURL=courseService.js.map