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
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { DetailMachineComponent } from './machine/detail-machine/detail-machine.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { ListErreurComponent } from './erreur/list-erreur/list-erreur.component';
import { LoginComponent } from './user/login/login.component';
import { DetailClientComponent } from './client/detail-client/detail-client.component';
import { UpdateMachineComponent } from './machine/update-machine/update-machine.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { UpdateSiteComponent } from './site/update-site/update-site.component';
import { DetailSiteComponent } from './site/detail-site/detail-site.component';
import { ListPieceComponent } from './piece/list-piece/list-piece.component';
import { NewPieceComponent } from './piece/new-piece/new-piece.component';
import { UpdatePieceComponent } from './piece/update-piece/update-piece.component';
import { DetailPieceComponent } from './piece/detail-piece/detail-piece.component';
import { ListSacComponent } from './sac/list-sac/list-sac.component';
import { NewSacComponent } from './sac/new-sac/new-sac.component';
import { UpdateSaceComponent } from './sac/update-sace/update-sace.component';
import { DetailSacComponent } from './sac/detail-sac/detail-sac.component';
import { ListReparationComponent } from './reparation/list-reparation/list-reparation.component';
import { NewReparationComponent } from './reparation/new-reparation/new-reparation.component';
import { UpdateReparationComponent } from './reparation/update-reparation/update-reparation.component';
import { DetailReparationComponent } from './reparation/detail-reparation/detail-reparation.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'connexion', component : LoginComponent },
  { path : 'menu', component : MenuComponent },
  { path : 'dashboard', component : DashboardComponent },
  //----------client-----------------------------------
  { path : 'listClient', component : ListClientComponent },
  { path : 'newClient', component : NewClientComponent },
  { path : 'updateClient/:id', component : UpdateClientComponent },
  { path : 'detailClient/:id', component : DetailClientComponent },
  //----------machine-----------------------------------
  { path : 'listMachine', component : ListMachineComponent },
  { path : 'newMachine', component : NewMachineComponent},
  { path : 'updateMachine/:id', component : UpdateMachineComponent },
  { path : 'detailMachine/:id', component : DetailMachineComponent},
  //----------user-----------------------------------
  { path : 'listUser', component : ListUserComponent },
  { path : 'newUser', component : NewUserComponent },
  { path : 'updateUser/:id', component : UpdateUserComponent },
  { path : 'detailUser/:id', component : DetailUserComponent},
  //----------site-----------------------------------
  { path : 'listSite', component : ListSiteComponent },
  { path : 'newSite', component : NewSiteComponent },
  { path : 'updateSite/:id', component : UpdateSiteComponent },
  { path : 'detailSite/:id', component : DetailSiteComponent},
  //----------piece-----------------------------------
  { path : 'listpiece', component : ListPieceComponent },
  { path : 'newPiece', component : NewPieceComponent },
  { path : 'updatePiece/:id', component : UpdatePieceComponent },
  { path : 'detailpiece/:id', component : DetailPieceComponent},
  //----------sac-----------------------------------
  { path : 'listSac', component : ListSacComponent },
  { path : 'newSac', component : NewSacComponent },
  { path : 'updateSac/:id', component : UpdateSaceComponent },
  { path : 'detailSac/:id', component : DetailSacComponent},
  //----------reparation-----------------------------------
  { path : 'listReparation', component : ListReparationComponent },
  { path : 'newReparation', component : NewReparationComponent },
  { path : 'updateReparation/:id', component : UpdateReparationComponent },
  { path : 'detailReparation/:id', component : DetailReparationComponent},
  //----------transaction et erreur-----------------------------------
  { path : 'listTransaction', component : ListTransactionComponent },
  { path : 'listErreur', component : ListErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
