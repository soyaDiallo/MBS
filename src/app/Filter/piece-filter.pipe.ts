import { Pipe, PipeTransform } from '@angular/core';
import { Piece } from '../entities/piece';

@Pipe({
  name: 'pieceFilter'
})
export class PieceFilterPipe implements PipeTransform {

  transform(pieces:Piece[], searchValue:String): Piece[] {
    if(!pieces || !searchValue)
    {
      return pieces;
    }
    return pieces.filter(piece=>
      piece.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      piece.designation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      piece.date_arrivee.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      );
  }


}
