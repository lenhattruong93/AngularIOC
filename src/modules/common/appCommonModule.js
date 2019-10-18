System.register(["@angular/core", "../common/component/pages/page", "./component/pages/pageContent"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, page_1, pageContent_1, AppCommonModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (pageContent_1_1) {
                pageContent_1 = pageContent_1_1;
            }
        ],
        execute: function () {
            AppCommonModule = /** @class */ (function () {
                function AppCommonModule() {
                }
                AppCommonModule = __decorate([
                    core_1.NgModule({
                        declarations: [page_1.Page, pageContent_1.PageContent],
                        exports: [page_1.Page, pageContent_1.PageContent]
                    })
                ], AppCommonModule);
                return AppCommonModule;
            }());
            exports_1("AppCommonModule", AppCommonModule);
        }
    };
});
//# sourceMappingURL=appCommonModule.js.map