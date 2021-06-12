import { Pipe, PipeTransform } from '@angular/core';
import { Site } from '../entities/site';

@Pipe({
  name: 'siteFilter'
})
export class SiteFilterPipe implements PipeTransform {

  transform(sites:Site[], searchValue:String): Site[] {
    if(!sites || !searchValue)
    {
      return sites;
    }
    return sites.filter(site=>
      site.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      site.pays.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      site.ville.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      site.adresse.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
