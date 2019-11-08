System.register(["@angular/core", "@angular/router", "./pages/courses", "../common/appCommonModule", "@angular/common", "./pages/addCourse"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, courses_1, appCommonModule_1, common_1, addCourse_1, routes, LearningRoutes;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_1_1) {
                courses_1 = courses_1_1;
            },
            function (appCommonModule_1_1) {
                appCommonModule_1 = appCommonModule_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (addCourse_1_1) {
                addCourse_1 = addCourse_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: "", redirectTo: "courses", pathMatch: "full" },
                { path: "courses", component: courses_1.Courses },
                { path: "addcourse", component: addCourse_1.AddCourse }
            ];
            LearningRoutes = /** @class */ (function () {
                function LearningRoutes() {
                }
                LearningRoutes = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), appCommonModule_1.AppCommonModule],
                        declarations: [courses_1.Courses, addCourse_1.AddCourse]
                    })
                ], LearningRoutes);
                return LearningRoutes;
            }());
            exports_1("LearningRoutes", LearningRoutes);
        }
    };
});
//# sourceMappingURL=learningRoutes.js.map