System.register(["@angular/core", "../../common/basePage"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, basePage_1, Courses;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (basePage_1_1) {
                basePage_1 = basePage_1_1;
            }
        ],
        execute: function () {
            Courses = /** @class */ (function (_super) {
                __extends(Courses, _super);
                function Courses() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Courses = __decorate([
                    core_1.Component({
                        template: "\n    <page [title]=\"i18n.learning.pages.courses.title\">\n        <page-content>\n                <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>{{i18n.learning.pages.courses.firstName}}</th>\n                        <th>{{i18n.learning.pages.courses.lastName}}</th>\n                        <th>{{i18n.learning.pages.courses.userName}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Larry</td>\n                        <td>the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                </tbody>\n            </table>      \n        </page-content>\n    </page>\n    "
                    })
                ], Courses);
                return Courses;
            }(basePage_1.BasePage));
            exports_1("Courses", Courses);
        }
    };
});
//# sourceMappingURL=courses.js.map