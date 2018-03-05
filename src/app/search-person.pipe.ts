import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './models/Person';

@Pipe({
  name: 'searchPerson'
})
export class SearchPersonPipe implements PipeTransform {

  transform(items: Person[], filter: string): any {  
    if (!items || !filter) {  
        return items;  
    }  
    return items.filter(item => item.Name.indexOf(filter) !== -1);  
  }

}
