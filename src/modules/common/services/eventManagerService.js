System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EventManagerService;
    return {
        setters: [],
        execute: function () {
            EventManagerService = /** @class */ (function () {
                function EventManagerService() {
                    this.registration = {};
                }
                EventManagerService.prototype.subscribe = function (item, func) {
                    var self = this;
                    self.registration[item] = func;
                };
                EventManagerService.prototype.publish = function (item) {
                    var self = this;
                    var _func = self.registration[item];
                    if (!!_func) {
                        _func();
                    }
                };
                return EventManagerService;
            }());
            exports_1("EventManagerService", EventManagerService);
        }
    };
});
//# sourceMappingURL=eventManagerService.js.map