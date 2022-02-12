import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@winsoft/ui';
import {AccordionModule} from 'primeng/accordion';
import { NavComponent } from './shared/nav/nav.component';
import { ProductsModule } from '@winsoft/products';
import { HttpClientModule } from '@angular/common/http';
import { OrdersModule } from '@winsoft/orders';
import { MessagesComponent } from './shared/messages/messages.component';
import { ToastModule } from 'primeng/toast'
import { MessageService } from 'primeng/api';
import { UserssModule } from '@winsoft/userss';

const routes: Routes = [
  {path: '', component: HomePageComponent },

];
@NgModule({
  declarations: [AppComponent,
     NxWelcomeComponent,
      HomePageComponent,
        HeaderComponent,
         FooterComponent,
         NavComponent,
         MessagesComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    ProductsModule,
    UiModule,
    OrdersModule,
    ToastModule,
    UserssModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports: [
    MessagesComponent
  ],
})
export class AppModule {}
