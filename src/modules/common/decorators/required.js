System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function required() {
        // return function(){} //anonymous  func
        return function (target, propertyName) {
            var __val;
            target["__validation"] = target["__validation"] || {};
            target["__validation"][propertyName] = propertyName;
            target["__maps"] = target["__maps"] || {};
            target["__maps"][propertyName] = propertyName;
            Object.defineProperty(target, propertyName, {
                get: getFunc,
                set: setFunc
            });
            function getFunc() {
                return __val;
            }
            function setFunc(val) {
                __val = val;
                // target["__validation"]=target["__validation"]||[]; Truong hop truoc
                if (!val) {
                    // if(!target["__validation"]){
                    //   target["__validation"]=[];  
                    // }
                    target["__validation"][propertyName] = propertyName;
                }
                else {
                    delete target["__validation"][propertyName];
                }
            }
        };
    }
    exports_1("required", required);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=required.js.map