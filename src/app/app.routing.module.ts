import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "src/dashboard/dashboard.component";
import { HomeComponent } from "src/home/home.component";



const routes:Routes  = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'home', component:HomeComponent},

];

@NgModule({
        imports : [
            RouterModule.forRoot(routes)
        ],
        exports : [
            RouterModule
        ]
})

export class AppRoutingModule{

}
