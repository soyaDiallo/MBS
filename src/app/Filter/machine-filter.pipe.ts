import { Pipe, PipeTransform } from '@angular/core';
import { Machine } from '../entities/machine';

@Pipe({
  name: 'machineFilter'
})
export class MachineFilterPipe implements PipeTransform {

  transform(machines:Machine[], searchValue:String): Machine[] {
    if(!machines || !searchValue)
    {
      return machines;
    }
    return machines.filter(machine=>
      machine.num.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      machine.designation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      machine.status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      machine.date_arrivee.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      );
  }

}
