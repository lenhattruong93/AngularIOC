import { NgModule } from "@angular/core";
import {Page} from "../common/component/pages/page";
import {PageContent} from "./component/pages/pageContent";
import {PageCommand} from "./component/pages/pageCommand";
import {FormHorizontal} from "./component/form/formHorizontal";
import {FormInput} from "./component/form/formInput";
import {FormButtons} from "./component/form/formButtons";
import {BtnDefault} from "./component/buttons/btnDefault";
import {BtnPrimary} from "./component/buttons/btnPrimary";
// import {Grid} from "./component/grid/grid";
@NgModule({
    declarations:[Page,PageContent,PageCommand,FormHorizontal,FormInput,FormButtons,BtnDefault,BtnPrimary],
    exports:[Page,PageContent,PageCommand,FormHorizontal,FormInput,FormButtons,BtnDefault,BtnPrimary],
})
export class AppCommonModule{}