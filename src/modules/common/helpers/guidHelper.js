System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function create() {
        return Math.random().toString();
    }
    var helper;
    return {
        setters: [],
        execute: function () {
            helper = {
                create: create
            };
            exports_1("default", helper);
        }
    };
});
//# sourceMappingURL=guidHelper.js.map