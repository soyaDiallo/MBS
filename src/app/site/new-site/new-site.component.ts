import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Site } from 'src/app/entities/site';
import { ClientService } from 'src/app/services/client-service';
import { SiteService } from 'src/app/services/site-service';

@Component({
  selector: 'app-new-site',
  templateUrl: './new-site.component.html',
  styleUrls: ['./new-site.component.css']
})
export class NewSiteComponent implements OnInit {

  site: Site = new Site();
  submitted = false;
  clients: Client[];

  constructor(private siteService: SiteService, private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.clientService.getAllClient().subscribe((data => { this.clients = data['_embedded']['clients']; }));
  }
  save() {
    this.clientService.getClient(Number(this.site.client)).subscribe(data => {
      let nom = this.site.nom;
      let adresse = this.site.adresse;
      let ville = this.site.ville;
      let pays = this.site.pays;

      this.site = new Site();

      this.site.client = data;
      this.site.nom = nom;
      this.site.pays = pays;
      this.site.ville = ville;
      this.site.adresse = adresse;

      this.siteService
        .createSite(this.site).subscribe(data => {
          //this.site = new Site();
          this.gotoList();
        },
          error => console.log(error));
    });

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listSite']);
  }
}
