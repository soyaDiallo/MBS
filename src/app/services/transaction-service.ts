import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class TransactionService 
{
    private url = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    
    getAllTransaction(): Observable<any> {  
        return this.http.get(`${this.url}/transactions`);
    }

    deleteTransaction(id: number): Observable<any> {
        return this.http.delete(`${this.url}/transactions/${id}`, { responseType: 'text' });
    }

    getTransaction(id: number): Observable<any> {
        return this.http.get(`${this.url}/transactions/${id}`,);
    }

    createTransaction(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/transactions`, client);
      }
    
    updateTransaction(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/transactions/${id}`, value);
      }
}
