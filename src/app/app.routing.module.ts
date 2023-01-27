import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "src/dashboard/dashboard.component";
import { AttendanceComponent } from "src/attendance/attendance.component";
import { StoreComponent } from "src/store/store.component";
import { GalleryComponent } from "src/gallery/gallery.component";
import { TransportComponent } from "./transport/transport.component";



const routes:Routes  = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'Attendance', component:AttendanceComponent},
    {path:'Store', component:StoreComponent},
    {path:'Gallery', component:GalleryComponent},
    {path:'Transport', component:TransportComponent},
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
