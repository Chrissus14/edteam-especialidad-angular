import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path: 'dashboard', //localhost:4200/dashboard
    component: DashboardComponent
  },
  {
    path: 'navbar', 
    component: NavbarComponent
  },
  {
    path: 'sidenav', 
    component: SidenavComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
