import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Site } from 'src/app/entities/site';
import { SiteService } from 'src/app/services/site-service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.css']
})
export class ListSiteComponent implements OnInit {

  searchValue: String;
  sites:Site[];
  client: Client;
  constructor(private http:HttpClient,private siteService:SiteService, private router:Router) {  }
  
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.siteService.getAllSite().subscribe((data=>{
      this.sites=data['_embedded']['sites'];
      this.sites.forEach(s=>{
        this.siteService.getSiteClient(s.id).subscribe(data=>{
          this.client=data;
          s.client=this.client.nom;
        });
      });
    }));
  }

  deleteSite(id:number){
    this.siteService.deleteSite(id).subscribe(
      data=>{
        console.log(data);
        this.loadData();
      },
      error=>{
        console.log(error);
      }
    );
  }

  updateSite(id: number){
    this.router.navigate(['updateSite', id]);
  }
  detailSite(id: number){
    this.router.navigate(['detailSite', id]);
  }
}
