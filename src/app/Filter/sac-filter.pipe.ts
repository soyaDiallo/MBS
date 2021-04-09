import { Pipe, PipeTransform } from '@angular/core';
import { Sac } from '../entities/sac';

@Pipe({
  name: 'sacFilter'
})
export class SacFilterPipe implements PipeTransform {

  transform(sacs:Sac[], searchValue:String): Sac[] {
    if(!sacs || !searchValue)
    {
      return sacs;
    }
    return sacs.filter(sac=>
      sac.num.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      sac.capacite.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }
}
