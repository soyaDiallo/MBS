import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from 'src/app/entities/site';
import { SiteService } from 'src/app/services/site-service';

@Component({
  selector: 'app-update-site',
  templateUrl: './update-site.component.html',
  styleUrls: ['./update-site.component.css']
})
export class UpdateSiteComponent implements OnInit {

  id: number;
  site: Site;

  constructor(private route: ActivatedRoute,private router: Router,
    private siteService: SiteService) { }

  ngOnInit() {
    this.site = new Site();

    this.id = this.route.snapshot.params['id'];
    
    this.siteService.getSite(this.id)
      .subscribe(data => {
        console.log(data)
        this.site = data;
      }, error => console.log(error));
  }

  updateSite() {
    this.siteService.updateSite(this.id, this.site)
      .subscribe(data => {
        console.log(data);
        this.site = new Site();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSite();    
  }

  gotoList() {
    this.router.navigate(['/listSite']);
  }
}
