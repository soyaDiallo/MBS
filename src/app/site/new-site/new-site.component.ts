import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from 'src/app/entities/site';
import { SiteService } from 'src/app/services/site-service';

@Component({
  selector: 'app-new-site',
  templateUrl: './new-site.component.html',
  styleUrls: ['./new-site.component.css']
})
export class NewSiteComponent implements OnInit {

  site: Site = new Site();
  submitted = false;

  constructor(private siteService: SiteService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.siteService
    .createSite(this.site).subscribe(data => {
      console.log(data)
      this.site = new Site();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listSite']);
  }
}
