import { DeplacementService } from './../../services/deplacement-service';
import { Router } from '@angular/router';
import { SiteService } from './../../services/site-service';
import { HttpClient } from '@angular/common/http';
import { Client } from './../../entities/client';
import { Site } from './../../entities/site';
import { Component, OnInit } from '@angular/core';
import { BarChartOption, ChartData, ChartView } from 'ngx-chart';

@Component({
  selector: 'app-dashboard-site',
  templateUrl: './dashboard-site.component.html',
  styleUrls: ['./dashboard-site.component.css']
})
export class DashboardSiteComponent implements OnInit {
  sites: Site[];
  client: Client;
  constructor(private http: HttpClient, private siteService: SiteService, private router: Router
    , private deplacementService: DeplacementService) { }

  ngOnInit() {
    this.loadData();
    this.deplacementService.getMachinesSite(6).subscribe(data => {
      console.log(data);
    });
  }

  loadData() {
    this.siteService.getAllSite().subscribe((data => {
      this.sites = data['_embedded']['sites'];
    }));
  }
  dashboard(id: number) {
    this.router.navigate(['dashboard', id]);
  }

  transactions(id: number) {
    this.router.navigate(['sitesTransactions', id]);
  }

}
