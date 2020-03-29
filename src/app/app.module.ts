import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SymptomsComponent } from './pages/symptoms/symptoms.component';
import { TestYourselfComponent } from './pages/test-yourself/test-yourself.component';
import { JounralComponent } from './pages/jounral/jounral.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    OverviewComponent,
    SymptomsComponent,
    TestYourselfComponent,
    JounralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-MN-KxAHbHAmhOdRgz1AILYo1qdkZ_Sw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
