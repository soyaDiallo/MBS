import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  client: Client = new Client();
  submitted = false;

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save() {
    this.clientService
    .createClient(this.client).subscribe(data => {
      console.log(data)
      this.client = new Client();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listClient']);
  }
}
