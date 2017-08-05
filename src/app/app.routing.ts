import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { CorpValueComponent } from "./CoporationValuation/corpvalue.component";
import { RealEstateValutionComponent } from "./RealEstateValuation/rev.component";

export const routes : Routes = [

    {
        path:'',
        redirectTo:'corpvalue',
        pathMatch:'full'
    },
    {
        path:'corpvalue',
        component:CorpValueComponent
    },
    {
        path:'realestate',
        component:RealEstateValutionComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}