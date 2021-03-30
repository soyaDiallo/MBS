import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewClientComponent } from './client/new-client/new-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { NewSiteComponent } from './site/new-site/new-site.component';
import { ListSiteComponent } from './site/list-site/list-site.component';
import { NewMachineComponent } from './machine/new-machine/new-machine.component';
import { ListMachineComponent } from './machine/list-machine/list-machine.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { NewTransactionComponent } from './transaction/new-transaction/new-transaction.component';
import { ListTransactionComponent } from './transaction/list-transaction/list-transaction.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewClientComponent,
    ListClientComponent,
    NewSiteComponent,
    ListSiteComponent,
    NewMachineComponent,
    ListMachineComponent,
    NewUserComponent,
    ListUserComponent,
    NewTransactionComponent,
    ListTransactionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
