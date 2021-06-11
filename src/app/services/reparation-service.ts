import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ReparationService 
{
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }

    
    getAllReparation(): Observable<any> {  
        return this.http.get(`${this.url}/reparations`);
    }

    deleteReparation(id: number): Observable<any> {
        return this.http.delete(`${this.url}/reparations/${id}`, { responseType: 'text' });
    }

    getReparation(id: number): Observable<any> {
        return this.http.get(`${this.url}/reparations/${id}`);
    }

    createReparation(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/reparations`, client);
      }
    
    updateReparation(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/reparations/${id}`, value);
      }
}
