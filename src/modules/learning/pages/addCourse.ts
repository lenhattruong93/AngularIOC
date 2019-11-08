import { Component } from "@angular/core";
import { BasePage } from "../../common/basepage";

@Component({
template:`
<page [title]="i18n.learning.pages.addCourse.title_">
    <page-content>
        <form-horizontal>
            <form-input [label]="i18n.learning.pages.addCourse.title"></form-input>
            <form-input [label]="i18n.learning.pages.addCourse.description"></form-input>
            <form-buttons>
                <btn-default [label]="i18n.learning.common.cancel"></btn-default>
                <btn-primary [label]="i18n.learning.common.save"></btn-primary>
            </form-buttons>
        </form-horizontal>
    </page-content>
</page>
        
`
})
export class AddCourse extends BasePage{

}