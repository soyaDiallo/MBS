import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../entities/transaction';

@Pipe({
  name: 'transactionFilter'
})
export class TransactionFilterPipe implements PipeTransform {

  transform(transactions:Transaction[], searchValue:String): Transaction[] {
    if(!transactions || !searchValue)
    {
      return transactions;
    }
    return transactions.filter(transaction=>
      transaction.num.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      transaction.status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      transaction.type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      transaction.date_transation.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
