import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/entities/machine';
import { Piece } from 'src/app/entities/piece';
import { PieceService } from 'src/app/services/piece-service';

@Component({
  selector: 'app-detail-piece',
  templateUrl: './detail-piece.component.html',
  styleUrls: ['./detail-piece.component.css']
})
export class DetailPieceComponent implements OnInit {

  id: number;
  piece: Piece;
  machine:Machine;
  constructor(private route: ActivatedRoute,private router: Router,
    private pieceService: PieceService) { }

  ngOnInit() {
    this.piece = new Piece();
    this.machine= new Machine();
    this.id = this.route.snapshot.params['id'];
    this.pieceService.getPieceMachine(this.id).subscribe(data =>{this.machine=data;})
    this.pieceService.getPiece(this.id)
      .subscribe(data => {
        console.log(data)
        this.piece = data;
      }, error => console.log(error));
  }

}
