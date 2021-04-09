import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class PieceService
{
    private url = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    
    getAllPiece(): Observable<any> {  
        return this.http.get(`${this.url}/pieces`);
    }

    deletePiece(id: number): Observable<any> {
        return this.http.delete(`${this.url}/pieces/${id}`, { responseType: 'text' });
    }

    getPiece(id: number): Observable<any> {
        return this.http.get(`${this.url}/pieces/${id}`,);
    }

    createPiece(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/pieces`, client);
      }
    
    updatePiece(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/pieces/${id}`, value);
      }
}
