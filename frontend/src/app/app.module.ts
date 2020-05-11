import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LoginComponent } from './login/login.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { WizardShowComponent } from './wizard-show/wizard-show.component';
import { LoginService } from './login/login.service';
import {MessageService} from 'primeng/api';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './_helpers/auth.guard.service';
import { JwtInterceptor } from './_helpers/jwt-interceptor.service';
import { ErrorInterceptor } from './_helpers/error-interceptor.service';
import { PrimitiveTypesComponent } from './primitive-types/primitive-types.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComingSoonComponent,
    LoginComponent,
    LeftSidebarComponent,
    WizardShowComponent,
    DashboardComponent,
    PrimitiveTypesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    AutoCompleteModule,
    TabViewModule,
    ToastModule
  ],
  providers: [
    ArticleService,
    LoginService,
    MessageService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
