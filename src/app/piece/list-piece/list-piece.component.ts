import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from 'src/app/entities/piece';
import { PieceService } from 'src/app/services/piece-service';

@Component({
  selector: 'app-list-piece',
  templateUrl: './list-piece.component.html',
  styleUrls: ['./list-piece.component.css']
})
export class ListPieceComponent implements OnInit {

  searchValue: String;
  pieces:Piece[];
  constructor(private http:HttpClient,private pieceService:PieceService, private router:Router) {  }
  
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.pieceService.getAllPiece().subscribe((data=>{this.pieces=data['_embedded']['pieces'];}));
  }

  deletePiece(id:number){
    this.pieceService.deletePiece(id).subscribe(
      data=>{
        console.log(data);
        this.loadData();
      },
      error=>{
        console.log(error);
      }
    );
  }

  updatePiece(id: number){
    this.router.navigate(['updatePiece', id]);
  }
  detailPiece(id: number){
    this.router.navigate(['detailpiece', id]);
  }
}
