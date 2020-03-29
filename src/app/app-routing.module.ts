import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { SymptomsComponent } from './pages/symptoms/symptoms.component';
import { JounralComponent } from './pages/jounral/jounral.component';
import { TestYourselfComponent } from './pages/test-yourself/test-yourself.component';


const routes: Routes = [
  {path:'',component:OverviewComponent,pathMatch:'full'},
  {path:'symptoms',component:SymptomsComponent},
  {path:'jounral',component:JounralComponent},
  {path:'test-yourself',component:TestYourselfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
