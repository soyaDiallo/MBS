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
      erreur.type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      erreur.message.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      erreur.machine.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      erreur.date_erreur.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      );
  }
}
