import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { HoriScrollComponent } from './hori-scroll/hori-scroll.component';
import { CardsComponent } from './cards/cards.component';
import {HttpClientModule} from '@angular/common/http';
import { AdverComponent } from './adver/adver.component';
import { ReviewComponent } from './review/review.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    HoriScrollComponent,
    CardsComponent,
    AdverComponent,
    ReviewComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
