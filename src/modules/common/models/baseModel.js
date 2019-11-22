System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseModel;
    return {
        setters: [],
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
                return BaseModel;
            }());
            exports_1("BaseModel", BaseModel);
        }
    };
});
//# sourceMappingURL=baseModel.js.map