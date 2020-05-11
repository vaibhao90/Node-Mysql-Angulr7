import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './_helpers/auth.guard.service';
import { PrimitiveTypesComponent } from './primitive-types/primitive-types.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', 
    component: DashboardComponent,  
    canActivate: [AuthGuardService]},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: "article", component: ArticleComponent,
  canActivate: [AuthGuardService]
},
 {
    path: 'primitvie-types', component: PrimitiveTypesComponent,
    canActivate: [AuthGuardService]
 },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
