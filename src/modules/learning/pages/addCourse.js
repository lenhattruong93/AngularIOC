System.register(["@angular/core", "../../common/basepage", "../../common/enum", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, basepage_1, enum_1, router_1, AddCourse;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (basepage_1_1) {
                basepage_1 = basepage_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            AddCourse = /** @class */ (function (_super) {
                __extends(AddCourse, _super);
                function AddCourse(router) {
                    var _this = _super.call(this) || this;
                    _this.model = {};
                    _this.router = router;
                    return _this;
                }
                AddCourse.prototype.onTitleChanged = function (newVl) {
                    this.model.title = newVl;
                };
                AddCourse.prototype.onDescChanged = function (newVl) {
                    this.model.description = newVl;
                };
                AddCourse.prototype.onSaveClicked = function () {
                    var self = this;
                    var eventManager = window.ioc.resolve(enum_1.IoCNames.EventManagerService);
                    // if(!self.model.title){
                    //     eventManager.publish("learning.page.addCourse.titleWasRequired");
                    //     return;
                    // }
                    var courseservice = window.ioc.resolve(enum_1.IoCNames.CourseService);
                    courseservice.addCourse(this.model).then(function () {
                        self.router.navigate(["learning/courses"]);
                    });
                };
                AddCourse = __decorate([
                    core_1.Component({
                        template: "\n<page [title]=\"i18n.learning.pages.addCourse.title_\">\n    <page-content>\n        <form-horizontal>\n            <form-input\n                [validation]=\"['learning.pages.addCourse.titleWasRequired']\"\n                [label]=\"i18n.learning.pages.addCourse.title\"\n                (onValueChange)=\"onTitleChanged($event)\"\n            ></form-input>\n            <form-input [label]=\"i18n.learning.pages.addCourse.description\"\n                (onValueChange)=\"onDescChanged($event)\"\n            ></form-input>\n            <form-buttons>\n                <btn-default [label]=\"i18n.learning.common.cancel\"></btn-default>\n                <btn-primary (click)=\"onSaveClicked()\" [label]=\"i18n.learning.common.save\"></btn-primary>\n            </form-buttons>\n        </form-horizontal>\n    </page-content>\n</page>\n        \n"
                    }),
                    __metadata("design:paramtypes", [router_1.Router])
                ], AddCourse);
                return AddCourse;
            }(basepage_1.BasePage));
            exports_1("AddCourse", AddCourse);
        }
    };
});
//# sourceMappingURL=addCourse.js.map