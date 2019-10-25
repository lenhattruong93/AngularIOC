System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "./appRoutes", "./layout", "@angular/router", "@angular/common", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, appRoutes_1, layout_1, router_1, common_1, http_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (appRoutes_1_1) {
                appRoutes_1 = appRoutes_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule(injector, appRef) {
                    window.ioc.setInjector(injector);
                    this.appRef = appRef;
                }
                AppModule.prototype.ngDoBootstrap = function () {
                    var resource = window.ioc.resolve("ResourceService");
                    var self = this;
                    resource.loadLocale("learning").then(function () {
                        self.appRef.bootstrap(layout_1.Layout);
                    });
                };
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            appRoutes_1.AppRoutes,
                            router_1.RouterModule,
                            common_1.CommonModule,
                            http_1.HttpModule,
                        ],
                        declarations: [layout_1.Layout],
                        //bootstrap: [Layout]
                        entryComponents: [layout_1.Layout]
                    }),
                    __metadata("design:paramtypes", [core_1.Injector, core_1.ApplicationRef])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=appModule.js.map