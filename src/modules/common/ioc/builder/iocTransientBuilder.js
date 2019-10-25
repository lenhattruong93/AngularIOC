System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IoCTransientBuilder;
    return {
        setters: [],
        execute: function () {
            IoCTransientBuilder = /** @class */ (function () {
                function IoCTransientBuilder(item) {
                    this.item = item;
                }
                IoCTransientBuilder.prototype.build = function () {
                    return new this.item.instanceOf();
                };
                return IoCTransientBuilder;
            }());
            exports_1("IoCTransientBuilder", IoCTransientBuilder);
        }
    };
});
//# sourceMappingURL=iocTransientBuilder.js.map