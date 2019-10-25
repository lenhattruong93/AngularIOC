System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IoCContainerFactory, IoCContainer;
    return {
        setters: [],
        execute: function () {
            IoCContainerFactory = /** @class */ (function () {
                function IoCContainerFactory() {
                }
                IoCContainerFactory.create = function () {
                    return new IoCContainer();
                };
                return IoCContainerFactory;
            }());
            exports_1("IoCContainerFactory", IoCContainerFactory);
            IoCContainer = /** @class */ (function () {
                function IoCContainer() {
                }
                IoCContainer.prototype.import = function (iocRegs_) {
                    this.iocRegs = iocRegs_;
                };
                IoCContainer.prototype.resolve = function (name) {
                    if (typeof name != "string") {
                        return this.injector.get(name);
                    }
                    var localItem;
                    this.iocRegs.forEach(function (item) {
                        if (item.name == name) {
                            localItem = item;
                        }
                    });
                    if (!!localItem) {
                        if (localItem.lifecycle == "Transient") {
                            return new localItem.instanceOf();
                        }
                        if (localItem.lifecycle == "Singleton") {
                            if (!localItem.instance) {
                                localItem.instance = new localItem.instanceOf();
                            }
                            return localItem.instance;
                        }
                    }
                };
                IoCContainer.prototype.setInjector = function (injector) {
                    this.injector = injector;
                };
                return IoCContainer;
            }());
        }
    };
});
//# sourceMappingURL=iocContainerFactory.js.map