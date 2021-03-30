import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private url = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    
    getAllClient() {
        const httpheaders = new HttpHeaders(
            {'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        });    
        return this.http.get(`${this.url}/clients`,{headers:httpheaders});
    }

    deleteClient(id: number): Observable<any> {
        return this.http.delete(`${this.url}/clients/${id}`, { responseType: 'text' });
    }

    getClient(id: number): Observable<any> {
        return this.http.get(`${this.url}/clients/${id}`,);
    }
}
