import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class SiteService
{
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }

    
    getAllSite(): Observable<any> {  
        return this.http.get(`${this.url}/sites`);
    }

    deleteSite(id: number): Observable<any> {
        return this.http.delete(`${this.url}/sites/${id}`, { responseType: 'text' });
    }

    getSite(id: number): Observable<any> {
        return this.http.get(`${this.url}/sites/${id}`);
    }

    getSiteClient(id: number): Observable<any> {
        return this.http.get(`${this.url}/sites/${id}/client`);
    }

    createSite(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/sites`, client);
      }
    
    updateSite(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/sites/${id}`, value);
      }
}
