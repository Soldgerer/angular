import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CcoursesComponent } from './ccourses/ccourses.component';
import { CstudentsComponent } from './cstudents/cstudents.component';
import { CteachersComponent } from './cteachers/cteachers.component';
import { PrincipalComponent } from './principal/principal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CcoursesComponent,
  },
  {
    path: 'students',
    component: CstudentsComponent,
  },
  {
    path: 'teachers',
    component: CteachersComponent,
  },
  {
    path: 'home',
    component: PrincipalComponent
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
