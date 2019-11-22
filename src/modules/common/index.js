System.register(["./models/basePage", "./enum", "./decorators/required", "./models/baseModel", "./models/promise", "./models/promiseFactory", "./ioc/iocContainerFactory"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (basePage_1_1) {
                exportStar_1(basePage_1_1);
            },
            function (enum_1_1) {
                exportStar_1(enum_1_1);
            },
            function (required_1_1) {
                exportStar_1(required_1_1);
            },
            function (baseModel_1_1) {
                exportStar_1(baseModel_1_1);
            },
            function (promise_1_1) {
                exportStar_1(promise_1_1);
            },
            function (promiseFactory_1_1) {
                exportStar_1(promiseFactory_1_1);
            },
            function (iocContainerFactory_1_1) {
                exportStar_1(iocContainerFactory_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map