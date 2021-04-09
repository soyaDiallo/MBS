import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sac } from 'src/app/entities/sac';
import { SacService } from 'src/app/services/sac-service';

@Component({
  selector: 'app-detail-sac',
  templateUrl: './detail-sac.component.html',
  styleUrls: ['./detail-sac.component.css']
})
export class DetailSacComponent implements OnInit {

  id: number;
  sac: Sac;

  constructor(private route: ActivatedRoute,private router: Router,
    private sacservice: SacService) { }

  ngOnInit() {
    this.sac = new Sac();

    this.id = this.route.snapshot.params['id'];
    
    this.sacservice.getSac(this.id)
      .subscribe(data => {
        console.log(data)
        this.sac = data;
      }, error => console.log(error));
  }


}
