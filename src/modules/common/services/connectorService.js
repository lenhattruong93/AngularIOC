System.register(["../models/promiseFactory", "@angular/http", "rxjs/add/operator/map"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promiseFactory_1, http_1, ConnectorService;
    return {
        setters: [
            function (promiseFactory_1_1) {
                promiseFactory_1 = promiseFactory_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            ConnectorService = /** @class */ (function () {
                function ConnectorService() {
                }
                ConnectorService.prototype.get = function (uri) {
                    var def = promiseFactory_1.PromiseFactory.create();
                    var http = window.ioc.resolve(http_1.Http);
                    http.get(uri)
                        .map(function (respone) { return respone.json(); })
                        .subscribe(function (json) { def.resolve(json); });
                    return def;
                };
                return ConnectorService;
            }());
            exports_1("ConnectorService", ConnectorService);
        }
    };
});
//# sourceMappingURL=connectorService.js.map