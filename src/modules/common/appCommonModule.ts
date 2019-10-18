import { NgModule } from "@angular/core";
import {Page} from "../common/component/pages/page";
import {PageContent} from "./component/pages/pageContent"
@NgModule({
    declarations:[Page,PageContent],
    exports:[Page,PageContent]
})
export class AppCommonModule{}