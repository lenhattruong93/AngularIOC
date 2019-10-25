System.register(["../models/promiseFactory"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promiseFactory_1, ResourceService;
    return {
        setters: [
            function (promiseFactory_1_1) {
                promiseFactory_1 = promiseFactory_1_1;
            }
        ],
        execute: function () {
            ResourceService = /** @class */ (function () {
                function ResourceService() {
                    this.locales = {};
                }
                ResourceService.prototype.getLocales = function () {
                    return this.locales;
                };
                ResourceService.prototype.loadLocale = function (name) {
                    var _this = this;
                    var def = promiseFactory_1.PromiseFactory.create();
                    var connector = window.ioc.resolve("ConnectorService");
                    var uri = "http://localhost:8080/src/resources/locales/" + name + ".vn.json";
                    connector.get(uri).then(function (json) {
                        _this.locales[name] = json;
                        def.resolve();
                    });
                    return def;
                };
                return ResourceService;
            }());
            exports_1("ResourceService", ResourceService);
        }
    };
});
//# sourceMappingURL=resourceService.js.map