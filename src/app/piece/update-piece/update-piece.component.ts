import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Piece } from 'src/app/entities/piece';
import { PieceService } from 'src/app/services/piece-service';

@Component({
  selector: 'app-update-piece',
  templateUrl: './update-piece.component.html',
  styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit {

  id: number;
  piece: Piece;

  constructor(private route: ActivatedRoute,private router: Router,
    private pieceService: PieceService) { }

  ngOnInit() {
    this.piece = new Piece();

    this.id = this.route.snapshot.params['id'];
    
    this.pieceService.getPiece(this.id)
      .subscribe(data => {
        console.log(data)
        this.piece = data;
      }, error => console.log(error));
  }

  updatePiece() {
    this.pieceService.updatePiece(this.id, this.piece)
      .subscribe(data => {
        console.log(data);
        this.piece = new Piece();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatePiece();    
  }

  gotoList() {
    this.router.navigate(['/listpiece']);
  }

}
