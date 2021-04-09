import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sac } from 'src/app/entities/sac';
import { SacService } from 'src/app/services/sac-service';

@Component({
  selector: 'app-new-sac',
  templateUrl: './new-sac.component.html',
  styleUrls: ['./new-sac.component.css']
})
export class NewSacComponent implements OnInit {

  sac: Sac = new Sac();
  submitted = false;

  constructor(private sacService: SacService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.sacService.createSac(this.sac).subscribe(data => {
      console.log(data)
      this.sac = new Sac();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listSac']);
  }
}
