import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/entities/transaction';
import { TransactionService } from 'src/app/services/transaction-service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  transactions:Transaction[];
  constructor( private transactionService:TransactionService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.transactionService.getAllTransaction().subscribe((data=>{this.transactions=data['_embedded']['transactionses'];}));
  }
  

}
