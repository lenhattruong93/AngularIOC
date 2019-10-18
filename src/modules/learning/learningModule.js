System.register(["@angular/core", "./learningRoutes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, learningRoutes_1, LearningModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (learningRoutes_1_1) {
                learningRoutes_1 = learningRoutes_1_1;
            }
        ],
        execute: function () {
            LearningModule = /** @class */ (function () {
                function LearningModule() {
                }
                LearningModule = __decorate([
                    core_1.NgModule({
                        imports: [learningRoutes_1.LearningRoutes]
                    })
                ], LearningModule);
                return LearningModule;
            }());
            exports_1("LearningModule", LearningModule);
        }
    };
});
//# sourceMappingURL=learningModule.js.map