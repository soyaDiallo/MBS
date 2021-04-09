import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class MachineService
{
    private url = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    
    getAllMachine(): Observable<any> {  
        return this.http.get(`${this.url}/machines`);
    }

    deleteMachine(id: number): Observable<any> {
        return this.http.delete(`${this.url}/machines/${id}`, { responseType: 'text' });
    }

    getMachine(id: number): Observable<any> {
        return this.http.get(`${this.url}/machines/${id}`,);
    }

    createMachine(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/machines`, client);
      }
    
    updateMachine(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/machines/${id}`, value);
      }
}
