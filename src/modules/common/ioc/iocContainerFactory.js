System.register(["./builder/iocBuilderFactory"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var iocBuilderFactory_1, IoCContainerFactory, IoCContainer;
    return {
        setters: [
            function (iocBuilderFactory_1_1) {
                iocBuilderFactory_1 = iocBuilderFactory_1_1;
            }
        ],
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
                        // if (localItem.lifecycle == "Transient") {
                        //   builder = new IoCTransientBuilder(localItem);
                        //     // return new localItem.instanceOf();
                        // }
                        // if (localItem.lifecycle == "Singleton") {
                        //      builder = new IoCSingletonBuilder(localItem);
                        //   //  return builder.build();
                        //     // if (!localItem.instance) {
                        //     //     localItem.instance = new localItem.instanceOf();
                        //     // }
                        //     // return localItem.instance;
                        // }
                        var builder = iocBuilderFactory_1.IoCBuilderFactory.create(localItem);
                        // switch(localItem.lifecycle){
                        //     case "Transient": 
                        //         builder = new IoCTransientBuilder(localItem);
                        //         break;
                        //     case "Singleton": 
                        //         builder = new IoCSingletonBuilder(localItem);
                        //         break;
                        // }
                        return builder.build();
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