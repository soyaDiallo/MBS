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

  totalDepositnbr: number;
  totalManuelnbr: number;
  totalCollectnbr: number;

  valeurfiltre: string;
  valeurMois: string;
  valeurAnnee: string;

  filtre = [
    { value: 'jour', viewValue: 'Jour' },
    { value: 'mois', viewValue: 'Mois' },
    { value: 'annee', viewValue: 'Année' }
  ]
  mois = [
    { value: '1', viewValue: 'Janvier' },
    { value: '2', viewValue: 'Fevrier' },
    { value: '3', viewValue: 'Mars' },
    { value: '4', viewValue: 'Avril' },
    { value: '5', viewValue: 'Mai' },
    { value: '6', viewValue: 'Juin' },
    { value: '7', viewValue: 'Juillet' },
    { value: '8', viewValue: 'Aout' },
    { value: '9', viewValue: 'Septembre' },
    { value: '10', viewValue: 'Octobre' },
    { value: '11', viewValue: 'Novembre' },
    { value: '12', viewValue: 'Decembre' }
  ]
  annee = [
    { value: '2021', viewValue: '2021' },
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023' },
    { value: '2025', viewValue: '2025' },
    { value: '2026', viewValue: '2026' },
    { value: '2027', viewValue: '2027' },
    { value: '2028', viewValue: '2028' },
    { value: '2029', viewValue: '2029' },
    { value: '2030', viewValue: '2030' }
  ]

  ///graphe#######################################
  single: any[];
  single2: any[];

  view: any[] = [350, 400];
  view2: any[] = [450, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Transactions';
  showYAxisLabel = false;
  yAxisLabel = 'Montant';
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  showLabels: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  // fin graphe####################################
  constructor(private modalService: NgbModal, private router: Router, private machineService: MachineService,
    private transactionService: TransactionService, private route: ActivatedRoute, private deplacementService: DeplacementService) {

  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.deplacementService.getMachinesSite(this.id).subscribe(data => { this.machines = data; });
    this.grapheBar("month", 6, this.id, "montant");
    this.grapheCircle("month", 6, this.id, "nbr");
  }
  grapheBar(filterBy: string, value: number, site: number, nm: string) {
    this.transactionService.getStat(filterBy, value, "deposit", site, nm).subscribe(data => {
      this.totalDeposit = data;
      this.transactionService.getStat(filterBy, value, "manuel", site, nm).subscribe(data => {
        this.totalManuel = data;
        this.transactionService.getStat(filterBy, value, "collect", site, nm).subscribe(data => {
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
  grapheCircle(filterBy: string, value: number, site: number, nm: string) {
    this.transactionService.getStat(filterBy, value, "deposit", site, nm).subscribe(data => {
      this.totalDepositnbr = data;
      this.transactionService.getStat(filterBy, value, "manuel", site, nm).subscribe(data => {
        this.totalManuelnbr = data;
        this.transactionService.getStat(filterBy, value, "collect", site, nm).subscribe(data => {
          this.totalCollectnbr = data;
          Object.assign(this, {
            single2: [
              {
                "name": "Deposit",
                "value": this.totalDepositnbr
              },
              {
                "name": "Manuel",
                "value": this.totalManuelnbr
              },
              {
                "name": "Collection",
                "value": this.totalCollectnbr
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

  getVal() {
    if (this.valeurfiltre == 'jour') {
      this.grapheBar("day", 6, this.id, "montant");
      this.grapheCircle("day", 6, this.id, "nbr");
    } else if (this.valeurfiltre == 'mois') {
      this.grapheBar("month", Number.parseInt(this.valeurMois), this.id, "montant");
      this.grapheCircle("month", Number.parseInt(this.valeurMois), this.id, "nbr");
    } else if (this.valeurfiltre == 'annee') {
      this.grapheBar("year",Number.parseInt(this.valeurAnnee) , this.id, "montant");
      this.grapheCircle("year", Number.parseInt(this.valeurAnnee), this.id, "nbr");
    }
  }


}
