import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = 'http://10.13.128.168:8080';
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get(`${this.url}/employes`, { headers, responseType: 'text' })
    }


    getAllUser(): Observable<any> {
        return this.http.get(`${this.url}/employes`);
    }
    getUserClient(id: number): Observable<any> {
        return this.http.get(`${this.url}/employes/${id}/client`);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.url}/employes/${id}`, { responseType: 'text' });
    }

    getUser(id: number): Observable<any> {
        return this.http.get(`${this.url}/employes/${id}`,);
    }

    createUser(client: Object): Observable<Object> {
        return this.http.post(`${this.url}/employes`, client);
    }

    updateUser(id: number, value: any): Observable<Object> {
        console.log(value);
        return this.http.put(`${this.url}/employes/${id}`, value);
    }
}
