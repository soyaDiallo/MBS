import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }

    
    getAllClient(): Observable<any> {  
        return this.http.get(`${this.url}/clients`);
    }

    deleteClient(id: number): Observable<any> {
        return this.http.delete(`${this.url}/clients/${id}`, { responseType: 'text' });
    }

    getClient(id: number): Observable<any> {
        return this.http.get(`${this.url}/clients/${id}`);
    }

    createClient(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/clients`, client);
      }
    
    updateClient(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/clients/${id}`, value);
      }
}
