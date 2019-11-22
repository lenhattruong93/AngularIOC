System.register(["@angular/core", "../../enum", "@app/common"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
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
    var core_1, enum_1, common_1, FormInput;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            FormInput = /** @class */ (function (_super) {
                __extends(FormInput, _super);
                function FormInput(ui) {
                    var _this = _super.call(this) || this;
                    _this.onValueChange = new core_1.EventEmitter();
                    _this.ui = ui;
                    return _this;
                }
                FormInput.prototype.onValueChanged = function () {
                    this.onValueChange.emit(this.value);
                };
                FormInput.prototype.ngAfterContentInit = function () {
                    var self = this;
                    var eventManager = window.ioc.resolve(enum_1.IoCNames.EventManagerService);
                    if (!self.validation) {
                        return;
                    }
                    self.validation.forEach(function (item) {
                        eventManager.subscribe(item, function () {
                            self.css = "Failed";
                            self.errorMessage = self.ui.nativeElement.title = self.getValidationName(item);
                        });
                    });
                };
                FormInput.prototype.getValidationName = function (item) {
                    var arr = item.split('.');
                    var _str = this.i18n;
                    //for(i=0;i++;i<arr.length)
                    arr.forEach(function (str) {
                        _str = _str[str];
                    });
                    return _str;
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], FormInput.prototype, "validation", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], FormInput.prototype, "label", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", core_1.EventEmitter)
                ], FormInput.prototype, "onValueChange", void 0);
                FormInput = __decorate([
                    core_1.Component({
                        selector: "form-input",
                        template: "\n    <div class=\"form-group\">\n        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">{{label}}\n        </label>\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <input class=\"{{css}}\" [(ngModel)]=\"value\" (change)=\"onValueChanged()\" type=\"text\" id=\"first-name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n            <span>{{errorMessage}}</span>\n        </div>\n    </div>\n    "
                    }),
                    __metadata("design:paramtypes", [core_1.ElementRef])
                ], FormInput);
                return FormInput;
            }(common_1.BasePage));
            exports_1("FormInput", FormInput);
        }
    };
});
//# sourceMappingURL=formInput.js.map