System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IoCSingletonBuilder;
    return {
        setters: [],
        execute: function () {
            IoCSingletonBuilder = /** @class */ (function () {
                function IoCSingletonBuilder(item) {
                    this.item = item;
                }
                IoCSingletonBuilder.prototype.build = function () {
                    if (!this.item.instance) {
                        this.item.instance = new this.item.instanceOf();
                    }
                    return this.item.instance;
                };
                return IoCSingletonBuilder;
            }());
            exports_1("IoCSingletonBuilder", IoCSingletonBuilder);
        }
    };
});
//# sourceMappingURL=iocSingletonBuilder.js.map