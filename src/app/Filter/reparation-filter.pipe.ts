import { Pipe, PipeTransform } from '@angular/core';
import { Reparation } from '../entities/reparation';

@Pipe({
  name: 'reparationFilter'
})
export class ReparationFilterPipe implements PipeTransform {

  transform(reparations:Reparation[], searchValue:String): Reparation[] {
    if(!reparations || !searchValue)
    {
      return reparations;
    }
    return reparations.filter(reparation=>
      reparation.motif.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      reparation.date_reparation.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      );
  }
}
