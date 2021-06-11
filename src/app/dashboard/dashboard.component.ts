import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Machine } from '../entities/machine';
import { Transaction } from '../entities/transaction';
import { MachineService } from '../services/machine-service';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  closeResult = '';
  machines:Machine[];
  transactions:Transaction[];
  constructor(private modalService: NgbModal, private router:Router,private machineService:MachineService, private transactionService:TransactionService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.machineService.getAllMachine().subscribe((data=>{this.machines=data['_embedded']['machines'];}));
    this.transactionService.getAllTransaction().subscribe((data=>{this.transactions=data['_embedded']['transactionses'];}));
  }
  
  open(transaction) {
    this.modalService.open(transaction,  { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openErreur(erreur) {
    this.modalService.open(erreur,  { size: 'xl' }).result.then((result) => {
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

  detailTransaction()
  {
    this.modalService.dismissAll();
    this.router.navigate(['/listTransaction']);
  }
  detailErreur()
  {
    this.modalService.dismissAll();
    this.router.navigate(['/listErreur']);
  }
  

}
