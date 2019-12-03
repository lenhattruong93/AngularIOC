System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function required(keyvalidations) {
        // return function(){} //anonymous  func
        return function (target, propertyName) {
            // let __val:any;
            var __propertyName = "__" + propertyName; // fix
            target["__validation"] = target["__validation"] || {};
            target["__validation"][propertyName] = keyvalidations;
            target["__maps"] = target["__maps"] || {};
            target["__maps"][propertyName] = propertyName; // Validattions vao day
            Object.defineProperty(target, propertyName, {
                get: getFunc,
                set: setFunc
            });
            function getFunc() {
                return target[__propertyName];
                // return __val; bug bi dinh gia tri
            }
            function setFunc(val) {
                target[__propertyName] = val;
                // target["__validation"]=target["__validation"]||[]; Truong hop truoc
                if (!val) {
                    // if(!target["__validation"]){
                    //   target["__validation"]=[];  
                    // }
                    target["__validation"][propertyName] = keyvalidations;
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