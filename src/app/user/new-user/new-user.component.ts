import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Employe } from 'src/app/entities/employe';
import { ClientService } from 'src/app/services/client-service';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: Employe = new Employe();
  client: Client = new Client();
  submitted = false;
  clients: Client[];
  constructor(private userService: UserService,
    private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.clientService.getAllClient().subscribe((data => { this.clients = data['_embedded']['clients']; }));
  }

  save() {
    this.clientService.getClient(Number(this.user.client)).subscribe(data => {
      //this.client = new Client();
      //this.client=data;
      //console.log(this.user);
      //console.log(JSON.parse(JSON.stringify(data)));
      //this.user = new Employe(this.user.nom,this.user.prenom,this.user.login,this.user.password,this.user.type,data);
      //console.log(this.user);
      let nom = this.user.nom;
      let prenom = this.user.prenom;
      let type = this.user.type;
      let login = this.user.login;
      let md = this.user.password;
      this.user = new Employe();
      this.user.client = data;
      this.user.nom = nom;
      this.user.prenom = prenom;
      this.user.type = type;
      this.user.password = md;
      this.user.login = login;
      console.log(this.user);
      this.userService.createUser(this.user).subscribe(data => {
        console.log(data)
        //this.user = new Employe();
        this.gotoList();
      },
        error => console.log(error));
    },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listUser']);
  }
}
