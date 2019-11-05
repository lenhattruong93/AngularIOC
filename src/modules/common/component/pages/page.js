System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Page;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Page = /** @class */ (function () {
                function Page() {
                }
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], Page.prototype, "title", void 0);
                Page = __decorate([
                    core_1.Component({
                        selector: "page",
                        template: "\n        <div class=\"x_panel\">\n          <div class=\"x_title\">\n            <h2>{{title}}</h2>                    \n            <div class=\"clearfix\"></div>\n          </div>\n          <div class=\"x_content\">\n                <ng-content select = \"page-content\"></ng-content>\n          </div>\n        </div>\n        "
                    })
                ], Page);
                return Page;
            }());
            exports_1("Page", Page);
        }
    };
});
//# sourceMappingURL=page.js.map