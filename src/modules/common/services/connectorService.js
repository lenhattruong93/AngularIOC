System.register(["../models/promiseFactory", "@angular/http", "rxjs/add/operator/map", "../enum"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promiseFactory_1, http_1, enum_1, ConnectorService;
    return {
        setters: [
            function (promiseFactory_1_1) {
                promiseFactory_1 = promiseFactory_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
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
                ConnectorService.prototype.post = function (uri, model) {
                    var headers = new http_1.Headers();
                    headers.append("content-type", "application/json");
                    var def = promiseFactory_1.PromiseFactory.create();
                    var http = window.ioc.resolve(http_1.Http);
                    http.post(uri, JSON.stringify(model), { headers: headers }) // Goi ham toJson se duoc goi neu co
                        .map(function (respone) { return respone.json(); })
                        .subscribe(function (json) {
                        if (json && json.errorKeys && json.errorKeys.length > 0) {
                            var eventManager_1 = window.ioc.resolve(enum_1.IoCNames.EventManagerService);
                            json.errorKeys.forEach(function (errorKey) {
                                eventManager_1.publish(errorKey);
                            });
                            return;
                        }
                        def.resolve(json);
                    });
                    return def;
                };
                ;
                return ConnectorService;
            }());
            exports_1("ConnectorService", ConnectorService);
        }
    };
});
//# sourceMappingURL=connectorService.js.map