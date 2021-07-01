import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Site } from 'src/app/entities/site';
import { ClientService } from 'src/app/services/client-service';
import { SiteService } from 'src/app/services/site-service';

@Component({
  selector: 'app-update-site',
  templateUrl: './update-site.component.html',
  styleUrls: ['./update-site.component.css']
})
export class UpdateSiteComponent implements OnInit {

  id: number;
  site: Site;
  clients: Client[];
  constructor(private route: ActivatedRoute, private router: Router,
    private siteService: SiteService, private clientService: ClientService) { }

  ngOnInit() {
    this.loadData();
    this.site = new Site();
    this.id = this.route.snapshot.params['id'];
    this.siteService.getSite(this.id)
      .subscribe(data => {
        console.log(data)
        this.site = data;
      }, error => console.log(error));
  }

  loadData() {
    this.clientService.getAllClient().subscribe((data => { this.clients = data['_embedded']['clients']; }));
  }
  updateSite() {

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
        .updateSite(this.id,this.site).subscribe(data => {
          //this.site = new Site();
          this.gotoList();
        },
          error => console.log(error));
    });
  }

  onSubmit() {
    this.updateSite();
  }

  gotoList() {
    this.router.navigate(['/listSite']);
  }
}
