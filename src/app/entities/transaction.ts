import { Employe } from './employe';
export class Transaction 
{
    id:number;
    montant:number;
    date_transaction:Date;
    type:string;
    status:string;
    employe:string;
}
