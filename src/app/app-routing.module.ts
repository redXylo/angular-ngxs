import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './feature/dashboard/dashboard.component';


const routes: Routes = [
    // {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: '', component: DashboardComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),

    ],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule {}