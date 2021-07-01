import { ErreurService } from './../../services/erreur-service';
import { MachineService } from 'src/app/services/machine-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Erreur } from 'src/app/entities/erreur';
import { Machine } from 'src/app/entities/machine';

@Component({
  selector: 'app-list-erreur',
  templateUrl: './list-erreur.component.html',
  styleUrls: ['./list-erreur.component.css']
})
export class ListErreurComponent implements OnInit {
  id: number;
  erreurs: Erreur[];
  machine:Machine;
  constructor(private route: ActivatedRoute, private router: Router,
    private machineService: MachineService, erreurService: ErreurService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.machineService.getMachine(this.id).subscribe(data=>{this.machine=data});
    this.machineService.getMachineErreurs(this.id).subscribe((data => {
      this.erreurs = data['_embedded']['erreurs'];
    }));
  }

}
