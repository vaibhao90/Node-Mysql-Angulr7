import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
