import { NgModule } from "@angular/core";
import {Page} from "../common/component/pages/page";
import {PageContent} from "./component/pages/pageContent";
import {PageCommand} from "./component/pages/pageCommand";
import {FormHorizontal} from "./component/form/formHorizontal";
import {FormInput} from "./component/form/formInput";
import {FormButtons} from "./component/form/formButtons";
import {BtnDefault} from "./component/buttons/btnDefault";
//import {BtnDefault} from "@app/common"; // private components
import {BtnPrimary} from "./component/buttons/btnPrimary";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {Grid} from "./component/grid/grid";
@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        Page,PageContent,PageCommand,
        FormHorizontal,FormInput,FormButtons,
        BtnDefault,BtnPrimary, Grid
    ],
    exports:[
        Page,PageContent,PageCommand,
        FormHorizontal,FormInput,FormButtons,
        BtnDefault,BtnPrimary , Grid
    ]
})
export class AppCommonModule{}