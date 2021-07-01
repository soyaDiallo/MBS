import { SiteService } from './../../services/site-service';
import { DeplacementService } from './../../services/deplacement-service';
import { MachineService } from './../../services/machine-service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from './../../services/transaction-service';
import { Site } from './../../entities/site';
import { Employe } from './../../entities/employe';
import { Transaction } from './../../entities/transaction';
import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/entities/machine';

@Component({
  selector: 'app-site-transactions',
  templateUrl: './site-transactions.component.html',
  styleUrls: ['./site-transactions.component.css']
})
export class SiteTransactionsComponent implements OnInit {
  transactions: Transaction[];
  employe: Employe;
  id: number;
  machine: Machine;
  site: Site;
  ts: Transaction[];
  constructor(private transactionService: TransactionService,
    private route: ActivatedRoute, private router: Router, private machineService: MachineService,
    private deplacementService: DeplacementService, private siteServie: SiteService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let i = 0;
    this.siteServie.getSite(this.id).subscribe(data => { this.site = data });
    this.deplacementService.getMachinesSite(this.id).subscribe(data => {
      data.forEach(element => {
        this.machineService.getMachine(element.id).subscribe(data => { this.machine = data });
        this.machineService.getMachineTransactions(element.id).subscribe((data => {
          this.employe = new Employe();
          this.transactions = data['_embedded']['transactionses'];
          if (i == 0) {
            this.ts = this.transactions;
          }
          this.transactions.forEach(t => {
            if(i != 0){
              this.ts.push(t);
            }
            this.transactionService.getTransactionEmploye(t.id).subscribe((data => {
              this.employe = data;
              t.employe = this.employe.nom;
            }));
          });
          i++;
          console.log(this.ts);
        }));
      });
    });

  }

}
