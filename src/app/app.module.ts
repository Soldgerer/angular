import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheadComponent } from './chead/chead.component';
import { CfootComponent } from './cfoot/cfoot.component';
import { ChistoryComponent } from './chistory/chistory.component';
import { CcoursesComponent } from './ccourses/ccourses.component';
import { CteachersComponent } from './cteachers/cteachers.component';
import { CstudentsComponent } from './cstudents/cstudents.component';
import { PrincipalComponent } from './principal/principal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CheadComponent,
    CfootComponent,
    ChistoryComponent,
    CcoursesComponent,
    CteachersComponent,
    CstudentsComponent,
    PrincipalComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
