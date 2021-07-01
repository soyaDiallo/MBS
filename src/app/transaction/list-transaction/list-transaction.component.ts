import { MachineService } from 'src/app/services/machine-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from './../../entities/employe';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/entities/transaction';
import { TransactionService } from 'src/app/services/transaction-service';
import { Machine } from 'src/app/entities/machine';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  transactions: Transaction[];
  employe: Employe;
  id: number;
  machine:Machine;
  constructor(private transactionService: TransactionService,
    private route: ActivatedRoute, private router: Router, private machineService: MachineService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.machineService.getMachine(this.id).subscribe(data=>{this.machine=data});
    this.machineService.getMachineTransactions(this.id).subscribe((data => {
      this.employe = new Employe();
      this.transactions = data['_embedded']['transactionses'];
      this.transactions.forEach(t => {
        this.transactionService.getTransactionEmploye(t.id).subscribe((data => {
          this.employe = data;
          t.employe = this.employe.nom;
        }));
      });
    }));
  }

}
