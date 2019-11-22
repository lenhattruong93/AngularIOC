System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasePage;
    return {
        setters: [],
        execute: function () {
            BasePage = /** @class */ (function () {
                function BasePage() {
                    var local = window.ioc.resolve("ResourceService");
                    this.i18n = local.getLocales();
                }
                return BasePage;
            }());
            exports_1("BasePage", BasePage);
        }
    };
});
//# sourceMappingURL=basePage.js.map