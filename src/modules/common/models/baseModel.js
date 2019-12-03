System.register(["@app/common"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, BaseModel;
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            BaseModel = /** @class */ (function () {
                function BaseModel() {
                }
                BaseModel.prototype.toJSON = function () {
                    var obj = {};
                    for (var item in this) {
                        if (!this.hasOwnProperty(item)) {
                            continue;
                        } // loc nhung dieu kien de loc ra nhung obj ko co required
                        obj[item] = this[item];
                    }
                    var map = this["__maps"];
                    for (var item in map) {
                        obj[item] = this[item];
                    }
                    // obj["title"]=this.title;
                    // obj["title1"]=this.title1;
                    // obj["title2"]=this.title2;
                    // obj["title3"]=this.title3;
                    return obj;
                };
                BaseModel.prototype.isValid = function () {
                    if (Object.keys(this["__validation"] || {}).length == 0) {
                        return true;
                    } // A && B && C hoac A || B || C
                    var ieventManager = window.ioc.resolve(common_1.IoCNames.EventManagerService);
                    var __valArray = this["__validation"];
                    for (var item in __valArray) {
                        ieventManager.publish(__valArray[item]);
                    }
                };
                return BaseModel;
            }());
            exports_1("BaseModel", BaseModel);
        }
    };
});
//# sourceMappingURL=baseModel.js.map