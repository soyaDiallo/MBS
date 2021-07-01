import { Chart } from 'chart.js';
import { DeplacementService } from './../services/deplacement-service';
import { Employe } from 'src/app/entities/employe';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Machine } from '../entities/machine';
import { Transaction } from '../entities/transaction';
import { MachineService } from '../services/machine-service';
import { TransactionService } from '../services/transaction-service';
import { Identifiers } from '@angular/compiler';
import { Erreur } from '../entities/erreur';

import { single } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  closeResult = '';
  machines: Machine[];
  transactions: Transaction[];
  erreurs: Erreur[];
  employe: Employe;
  machineid: number;
  id: number;
  totalDeposit: number;
  totalManuel: number;
  totalCollect: number;

  ///graphe#######################################
  single: any[];
  multi: any[];

  view: any[] = [500, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Transactions';
  showYAxisLabel = true;
  yAxisLabel = 'Montant';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  onSelect(event) {
    console.log(event);
  }
  // fin graphe####################################
  constructor(private modalService: NgbModal, private router: Router, private machineService: MachineService,
    private transactionService: TransactionService, private route: ActivatedRoute, private deplacementService: DeplacementService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.deplacementService.getMachinesSite(this.id).subscribe(data => { this.machines = data; });
    this.transactionService.getTotalDeposit().subscribe(data => {
      this.totalDeposit = data; console.log(this.totalCollect);
      this.transactionService.getTotalManuel().subscribe(data => {
        this.totalManuel = data;
        this.transactionService.getTotalCollect().subscribe(data => {
          this.totalCollect = data;
          Object.assign(this, {
            single: [
              {
                "name": "Deposit",
                "value": this.totalDeposit
              },
              {
                "name": "Manuel",
                "value": this.totalManuel
              },
              {
                "name": "Collection",
                "value": this.totalCollect
              }
            ]
          });
        });
      });

    });
  }
  open(transaction, id: number) {
    this.machineid = id;
    this.machineService.getMachineTransactions(id).subscribe((data => {
      this.transactions = data['_embedded']['transactionses'];
      this.transactions.forEach(t => {
        this.transactionService.getTransactionEmploye(t.id).subscribe((data => {
          this.employe = data;
          t.employe = this.employe.nom;
        }));
      });
    }));
    this.modalService.open(transaction, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openErreur(erreur, id: number) {
    this.machineid = id;
    this.machineService.getMachineErreurs(id).subscribe((data => {
      this.erreurs = data['_embedded']['erreurs'];
    }));
    this.modalService.open(erreur, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  detailTransaction(id) {
    this.modalService.dismissAll();
    this.router.navigate(['listTransaction', id]);
  }
  detailErreur(id: number) {
    this.modalService.dismissAll();
    this.router.navigate(['listErreur', id]);
  }


}
