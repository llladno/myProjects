import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { IfcomponentComponent } from './ifcomponent/ifcomponent.component';
import {FormsModule} from "@angular/forms";
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Router, RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop/shop.component";


const appRoutes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: NotfoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    IfcomponentComponent,
    BarComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
