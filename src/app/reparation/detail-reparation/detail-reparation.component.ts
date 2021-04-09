import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reparation } from 'src/app/entities/reparation';
import { ReparationService } from 'src/app/services/reparation-service';

@Component({
  selector: 'app-detail-reparation',
  templateUrl: './detail-reparation.component.html',
  styleUrls: ['./detail-reparation.component.css']
})
export class DetailReparationComponent implements OnInit {

  id: number;
  reparation: Reparation;

  constructor(private route: ActivatedRoute,private router: Router,
    private reparationService: ReparationService) { }

  ngOnInit() {
    this.reparation = new Reparation();

    this.id = this.route.snapshot.params['id'];
    
    this.reparationService.getReparation(this.id)
      .subscribe(data => {
        console.log(data)
        this.reparation = data;
      }, error => console.log(error));
  }

}
