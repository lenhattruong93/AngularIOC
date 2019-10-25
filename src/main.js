System.register(["@angular/platform-browser-dynamic", "./appModule", "./modules/common/ioc/iocContainerFactory", "./apps/default/config/ioc"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, appModule_1, iocContainerFactory_1, ioc_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (appModule_1_1) {
                appModule_1 = appModule_1_1;
            },
            function (iocContainerFactory_1_1) {
                iocContainerFactory_1 = iocContainerFactory_1_1;
            },
            function (ioc_1_1) {
                ioc_1 = ioc_1_1;
            }
        ],
        execute: function () {
            window.ioc = iocContainerFactory_1.IoCContainerFactory.create();
            window.ioc.import(ioc_1.default);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(appModule_1.AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map