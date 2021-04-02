import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private url = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    
    getAllClient(): Observable<any> {  
        return this.http.get(`${this.url}/clients`);
    }

    deleteClient(id: number): Observable<any> {
        return this.http.delete(`${this.url}/clients/${id}`, { responseType: 'text' });
    }

    getClient(id: number): Observable<any> {
        return this.http.get(`${this.url}/clients/${id}`,);
    }

    createClient(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/clients`, client);
      }
    
    updateClient(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.url}/${id}`, value);
      }
}
