System.register(["@angular/core", "../../common/basePage", "../../common/enum"], function (exports_1, context_1) {
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
    var core_1, basePage_1, enum_1, Courses;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (basePage_1_1) {
                basePage_1 = basePage_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            Courses = /** @class */ (function (_super) {
                __extends(Courses, _super);
                function Courses() {
                    var _this = _super.call(this) || this;
                    var self = _this;
                    var courseService = window.ioc.resolve(enum_1.IoCNames.CourseService);
                    courseService.getCourses().then(function (data) {
                        self.courses = data;
                    });
                    return _this;
                }
                Courses = __decorate([
                    core_1.Component({
                        template: "\n    <page [title]=\"i18n.learning.pages.courses.title_\">\n        <page-content>\n        <table class=\"table\">\n        <thead>\n            <tr>\n                <th>{{i18n.learning.pages.courses.id}}</th>\n                <th>{{i18n.learning.pages.courses.title}}</th>\n                <th>{{i18n.learning.pages.courses.description}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor='let item of courses'>\n                <td>{{item.id}}</td>\n                <td>{{item.title}}</td>\n                <td>{{item.description}}</td>\n            </tr>\n\n        </tbody>\n    </table>  \n        </page-content> \n    </page>\n    "
                    }),
                    __metadata("design:paramtypes", [])
                ], Courses);
                return Courses;
            }(basePage_1.BasePage));
            exports_1("Courses", Courses);
        }
    };
});
//# sourceMappingURL=courses.js.map