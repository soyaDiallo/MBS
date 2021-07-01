import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../entities/client';

@Pipe({
  name: 'clientFilter'
})
export class ClientFilterPipe implements PipeTransform {

  transform(clients:Client[], searchValue:String): Client[] {
    if(!clients || !searchValue)
    {
      return clients;
    }
    return clients.filter(client=>
      client.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      client.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      client.tel.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      client.adresse.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      );
  }

}
