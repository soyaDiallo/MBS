import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class TransactionService 
{
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }

    
    getAllTransaction(): Observable<any> {  
        return this.http.get(`${this.url}/transactionses`);
    }

    deleteTransaction(id: number): Observable<any> {
        return this.http.delete(`${this.url}/transactionses/${id}`, { responseType: 'text' });
    }

    getTransaction(id: number): Observable<any> {
        return this.http.get(`${this.url}/transactionses/${id}`);
    }

    createTransaction(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/transactionses`, client);
      }
    
    updateTransaction(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/transactionses/${id}`, value);
      }
}
