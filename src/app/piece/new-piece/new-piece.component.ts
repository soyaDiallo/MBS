import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from 'src/app/entities/piece';
import { PieceService } from 'src/app/services/piece-service';

@Component({
  selector: 'app-new-piece',
  templateUrl: './new-piece.component.html',
  styleUrls: ['./new-piece.component.css']
})
export class NewPieceComponent implements OnInit {

  piece: Piece = new Piece();
  submitted = false;

  constructor(private pieceService: PieceService,
    private router: Router) { }

  ngOnInit() {
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
