import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './client/list-client/list-client.component';
import { NewClientComponent } from './client/new-client/new-client.component';
import { ListMachineComponent } from './machine/list-machine/list-machine.component';
import { NewMachineComponent } from './machine/new-machine/new-machine.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { ListSiteComponent } from './site/list-site/list-site.component';
import { NewSiteComponent } from './site/new-site/new-site.component';
import { ListTransactionComponent } from './transaction/list-transaction/list-transaction.component';
import { NewTransactionComponent } from './transaction/new-transaction/new-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { DetailMachineComponent } from './machine/detail-machine/detail-machine.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';

const routes: Routes = [
  { path : 'menu', component : MenuComponent },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'listClient', component : ListClientComponent },
  { path : 'newClient', component : NewClientComponent },
  { path : 'updateClient/:id', component : UpdateClientComponent },
  { path : 'listMachine', component : ListMachineComponent },
  { path : 'newMachine', component : NewMachineComponent},
  { path : 'machineDetails', component : DetailMachineComponent},
  { path : 'listUser', component : ListUserComponent },
  { path : 'newUser', component : NewUserComponent },
  { path : 'listSite', component : ListSiteComponent },
  { path : 'newSite', component : NewSiteComponent },
  { path : 'listTransaction', component : ListTransactionComponent },
  { path : 'newTransaction', component : NewTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
