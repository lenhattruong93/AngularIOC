System.register(["./iocTransientBuilder", "./iocSingletonBuilder", "../../enum"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var iocTransientBuilder_1, iocSingletonBuilder_1, enum_1, IoCBuilderFactory;
    return {
        setters: [
            function (iocTransientBuilder_1_1) {
                iocTransientBuilder_1 = iocTransientBuilder_1_1;
            },
            function (iocSingletonBuilder_1_1) {
                iocSingletonBuilder_1 = iocSingletonBuilder_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            IoCBuilderFactory = /** @class */ (function () {
                function IoCBuilderFactory() {
                }
                IoCBuilderFactory.create = function (item) {
                    switch (item.lifecycle) {
                        case enum_1.IoCLifecycle.Transient:
                            return new iocTransientBuilder_1.IoCTransientBuilder(item);
                        case enum_1.IoCLifecycle.Singleton:
                            return new iocSingletonBuilder_1.IoCSingletonBuilder(item);
                    }
                };
                return IoCBuilderFactory;
            }());
            exports_1("IoCBuilderFactory", IoCBuilderFactory);
        }
    };
});
//# sourceMappingURL=iocBuilderFactory.js.map