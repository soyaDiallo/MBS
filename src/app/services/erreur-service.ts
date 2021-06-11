import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ErreurService 
{
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }


    
    getAllErreur(): Observable<any> {  
        return this.http.get(`${this.url}/erreurs`);
    }

    deleteErreur(id: number): Observable<any> {
        return this.http.delete(`${this.url}/erreurs/${id}`, { responseType: 'text' });
    }

    getErreur(id: number): Observable<any> {
        return this.http.get(`${this.url}/erreurs/${id}`);
    }

    createErreur(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/erreurs`, client);
      }
    
    updateErreur(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/erreurs/${id}`, value);
      }
}
