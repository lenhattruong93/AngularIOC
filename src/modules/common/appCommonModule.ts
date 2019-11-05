import { NgModule } from "@angular/core";
import {Page} from "../common/component/pages/page";
import {PageContent} from "./component/pages/pageContent";

// import {Grid} from "./component/grid/grid";
@NgModule({
    declarations:[Page,PageContent],
    exports:[Page,PageContent],
})
export class AppCommonModule{}