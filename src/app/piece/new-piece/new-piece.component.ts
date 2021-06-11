import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from 'src/app/entities/piece';
import { PieceService } from 'src/app/services/piece-service';
import { FormControl } from '@angular/forms';
import { MachineService } from 'src/app/services/machine-service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Machine } from 'src/app/entities/machine';

@Component({
  selector: 'app-new-piece',
  templateUrl: './new-piece.component.html',
  styleUrls: ['./new-piece.component.css']
})
export class NewPieceComponent implements OnInit {

  piece: Piece = new Piece();
  submitted = false;
  machine = new FormControl();
  options: string[];
  machines:Machine[];

  constructor(private pieceService: PieceService, private machineService: MachineService,
    private router: Router) { }
    ngOnInit(){
      this.loadData();
    }

  /*filteredOptions: Observable<string[]>;

  ngOnInit() {
    
    //this.machineService.getAllMachine().subscribe((data => { this.machines = data['_embedded']['machines'];}));
    this.filteredOptions = this.machine.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }*/

  loadData() {
    this.machineService.getAllMachine().subscribe((data => { this.machines = data['_embedded']['machines']; }));
  }

  save() {
    this.pieceService
      .createPiece(this.piece).subscribe(data => {
        console.log(data)
        this.piece = new Piece();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listpiece']);
  }

}
