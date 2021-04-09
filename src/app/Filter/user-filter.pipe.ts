import { Pipe, PipeTransform } from '@angular/core';
import { Employe } from '../entities/employe';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(employes:Employe[], searchValue:String): Employe[] {
    if(!employes || !searchValue)
    {
      return employes;
    }
    return employes.filter(employe=>
      employe.prenom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      );
  }
}
