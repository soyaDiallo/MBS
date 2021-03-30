import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  constructor(private http: HttpClient) { 
    console.log(this.http.get("http://localhost:8080/clients"));
  }
  
}
