import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class SacService 
{
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }

    
    getAllSac(): Observable<any> {  
        return this.http.get(`${this.url}/sacs`);
    }

    deleteSac(id: number): Observable<any> {
        return this.http.delete(`${this.url}/sacs/${id}`, { responseType: 'text' });
    }

    getSac(id: number): Observable<any> {
        return this.http.get(`${this.url}/sacs/${id}`);
    }

    createSac(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/sacs`, client);
      }
    
    updateSac(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/sacs/${id}`, value);
      }
}
