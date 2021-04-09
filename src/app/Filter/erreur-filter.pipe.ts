import { Pipe, PipeTransform } from '@angular/core';
import { Erreur } from '../entities/erreur';

@Pipe({
  name: 'erreurFilter'
})
export class ErreurFilterPipe implements PipeTransform {

  transform(erreurs:Erreur[], searchValue:String): Erreur[] {
    if(!erreurs || !searchValue)
    {
      return erreurs;
    }
    return erreurs.filter(erreur=>
      erreur.motif.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      erreur.reparation_date.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      );
  }
}
