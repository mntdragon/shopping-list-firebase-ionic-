import { NgModule } from "@angular/core";
import { HomePage } from "./home";

import {IonicPageModule} from "ionic-angular";

@NgModule({
    declarations: [HomePage],
    imports:[IonicPageModule.forChild(HomePage)]
})
//Saying to ionic, the page is home page and lazy loaded in the future
export class HomeModule{

}