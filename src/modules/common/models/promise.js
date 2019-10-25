System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PromiseStatus, Promise;
    return {
        setters: [],
        execute: function () {
            (function (PromiseStatus) {
                PromiseStatus[PromiseStatus["Success"] = 1] = "Success";
            })(PromiseStatus || (PromiseStatus = {}));
            Promise = /** @class */ (function () {
                function Promise() {
                }
                Promise.prototype.resolve = function (arg) {
                    this.arg = arg;
                    this.status = PromiseStatus.Success;
                    this.processCallback();
                    // if(this.status == PromiseStatus.Success && !!this.callback){
                    //     this.callback(this.arg);
                    // }
                    return this;
                };
                Promise.prototype.then = function (callback) {
                    this.callback = callback;
                    this.processCallback();
                    // if(this.status == PromiseStatus.Success && !!this.callback ){
                    //     this.callback(this.arg);
                    // }
                    return this;
                };
                Promise.prototype.processCallback = function () {
                    if (this.status == PromiseStatus.Success && !!this.callback) {
                        this.callback(this.arg);
                    }
                };
                return Promise;
            }());
            exports_1("Promise", Promise);
        }
    };
});
//# sourceMappingURL=promise.js.map