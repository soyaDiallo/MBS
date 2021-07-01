import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class DeplacementService 
{
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }

    getMachinesSite(id: number): Observable<any> {
        return this.http.get(`${this.url}/machinesSite/${id}`);
    }

    getAllDeplacement(): Observable<any> {  
        return this.http.get(`${this.url}/deplacements`);
    }

    deleteDeplacement(id: number): Observable<any> {
        return this.http.delete(`${this.url}/deplacements/${id}`, { responseType: 'text' });
    }

    getDeplacement(id: number): Observable<any> {
        return this.http.get(`${this.url}/deplacements/${id}`);
    }

    createDeplacement(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/deplacements`, client);
      }
    
    updateDeplacement(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/deplacements/${id}`, value);
      }
}
