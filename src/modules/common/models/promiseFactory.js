System.register(["./promise"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promise_1, PromiseFactory;
    return {
        setters: [
            function (promise_1_1) {
                promise_1 = promise_1_1;
            }
        ],
        execute: function () {
            PromiseFactory = /** @class */ (function () {
                function PromiseFactory() {
                }
                PromiseFactory.create = function () {
                    return new promise_1.Promise();
                };
                return PromiseFactory;
            }());
            exports_1("PromiseFactory", PromiseFactory);
        }
    };
});
//# sourceMappingURL=promiseFactory.js.map