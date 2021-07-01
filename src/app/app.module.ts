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
import { ListTransactionComponent } from './transaction/list-transaction/list-transaction.component';
import { MenuComponent } from './menu/menu.component';
import { DetailMachineComponent } from './machine/detail-machine/detail-machine.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListErreurComponent } from './erreur/list-erreur/list-erreur.component';
import { ClientFilterPipe } from './Filter/client-filter.pipe';
import { LoginComponent } from './user/login/login.component';
import { ListPieceComponent } from './piece/list-piece/list-piece.component';
import { NewPieceComponent } from './piece/new-piece/new-piece.component';
import { UpdatePieceComponent } from './piece/update-piece/update-piece.component';
import { DetailPieceComponent } from './piece/detail-piece/detail-piece.component';
import { ListSacComponent } from './sac/list-sac/list-sac.component';
import { NewSacComponent } from './sac/new-sac/new-sac.component';
import { UpdateSaceComponent } from './sac/update-sace/update-sace.component';
import { DetailSacComponent } from './sac/detail-sac/detail-sac.component';
import { DetailClientComponent } from './client/detail-client/detail-client.component';
import { ListReparationComponent } from './reparation/list-reparation/list-reparation.component';
import { NewReparationComponent } from './reparation/new-reparation/new-reparation.component';
import { UpdateReparationComponent } from './reparation/update-reparation/update-reparation.component';
import { DetailReparationComponent } from './reparation/detail-reparation/detail-reparation.component';
import { UpdateMachineComponent } from './machine/update-machine/update-machine.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { DetailSiteComponent } from './site/detail-site/detail-site.component';
import { UpdateSiteComponent } from './site/update-site/update-site.component';
import { MachineFilterPipe } from './filter/machine-filter.pipe';
import { PieceFilterPipe } from './filter/piece-filter.pipe';
import { SacFilterPipe } from './filter/sac-filter.pipe';
import { SiteFilterPipe } from './filter/site-filter.pipe';
import { UserFilterPipe } from './filter/user-filter.pipe';
import { ReparationFilterPipe } from './filter/reparation-filter.pipe';
import { TransactionFilterPipe } from './filter/transaction-filter.pipe';
import { ErreurFilterPipe } from './filter/erreur-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DashboardSiteComponent } from './dashboard/dashboard-site/dashboard-site.component';
import { SiteTransactionsComponent } from './transaction/site-transactions/site-transactions.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    ListTransactionComponent,
    MenuComponent,
    DetailMachineComponent,
    UpdateClientComponent,
    ListErreurComponent,
    ClientFilterPipe,
    LoginComponent,
    ListPieceComponent,
    NewPieceComponent,
    UpdatePieceComponent,
    DetailPieceComponent,
    ListSacComponent,
    NewSacComponent,
    UpdateSaceComponent,
    DetailSacComponent,
    DetailClientComponent,
    ListReparationComponent,
    NewReparationComponent,
    UpdateReparationComponent,
    DetailReparationComponent,
    UpdateMachineComponent,
    UpdateUserComponent,
    DetailUserComponent,
    DetailSiteComponent,
    UpdateSiteComponent,
    MachineFilterPipe,
    PieceFilterPipe,
    SacFilterPipe,
    SiteFilterPipe,
    UserFilterPipe,
    ReparationFilterPipe,
    TransactionFilterPipe,
    ErreurFilterPipe,
    DashboardSiteComponent,
    SiteTransactionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
