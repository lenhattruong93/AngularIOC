System.register(["@app/common"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, common_2, CourseService;
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }
        ],
        execute: function () {
            CourseService = /** @class */ (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    var def = common_1.PromiseFactory.create();
                    var uri = "http://group02.com/rest/api/courses";
                    var iconnector = window.ioc.resolve(common_2.IoCNames.ConnectorService);
                    iconnector.get(uri).then(function (data) {
                        def.resolve(data);
                    });
                    return def;
                };
                CourseService.prototype.addCourse = function (model) {
                    var def = common_1.PromiseFactory.create();
                    var uri = "http://group02.com/rest/api/courses/addcourse";
                    var iconnector = window.ioc.resolve(common_2.IoCNames.ConnectorService);
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