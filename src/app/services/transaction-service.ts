import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private url = 'http://10.13.128.168:8080';
    
    constructor(private http: HttpClient) { }

    // ***********************************************************
    getStat(filterBy:string,value:number,type:string,site:number,nm:string): Observable<any> {
        return this.http.get(`${this.url}/stat/${filterBy}/${value}/${type}/${site}/${nm}`);
    }
   
    // ***********************************************************

    // ***********************************************************
    // getTotalDeposit(): Observable<any> {
    //     return this.http.get(`${this.url}/totalDeposit`);
    // }
    // getTotalManuel(): Observable<any> {
    //     return this.http.get(`${this.url}/totalManuel`);
    // }
    // getTotalCollect(): Observable<any> {
    //     return this.http.get(`${this.url}/totalCollect`);
    // }
    // ***********************************************************

    getAllTransaction(): Observable<any> {
        return this.http.get(`${this.url}/transactionses`);
    }

    deleteTransaction(id: number): Observable<any> {
        return this.http.delete(`${this.url}/transactionses/${id}`, { responseType: 'text' });
    }

    getTransaction(id: number): Observable<any> {
        return this.http.get(`${this.url}/transactionses/${id}`);
    }
    getTransactionEmploye(id: number): Observable<any> {
        return this.http.get(`${this.url}/transactionses/${id}/employe`);
    }

    createTransaction(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/transactionses`, client);
    }

    updateTransaction(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/transactionses/${id}`, value);
    }
}
