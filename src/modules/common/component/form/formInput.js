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
    var core_1, FormInput;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            FormInput = /** @class */ (function () {
                function FormInput() {
                }
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], FormInput.prototype, "label", void 0);
                FormInput = __decorate([
                    core_1.Component({
                        selector: "form-input",
                        template: "\n    <div class=\"form-group\">\n        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">{{label}}\n        </label>\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n        <input type=\"text\" id=\"first-name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n        </div>\n    </div>\n    "
                    })
                ], FormInput);
                return FormInput;
            }());
            exports_1("FormInput", FormInput);
        }
    };
});
//# sourceMappingURL=formInput.js.map