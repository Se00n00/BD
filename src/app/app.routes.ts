import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DatacollectionComponent } from './datacollection/datacollection.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { ModelingComponent } from './modeling/modeling.component';

export const routes: Routes = [
    {path:"",title:"Biomarker Prediction",component:HomeComponent},
    {path:"dataset",title:"Dataset for our work",component:DatacollectionComponent},
    {path:"model",title:"Model architecture and results",component:ModelingComponent},
    {path:"synopsis",title:"Major Points of this work",component:SynopsisComponent},
    {path:"**",title:"Page not found",component:NotfoundComponent}
];
