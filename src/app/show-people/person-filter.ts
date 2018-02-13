import { Pipe, PipeTransform } from '@angular/core';

import { Person } from '../models/Person';

@Pipe({
    name: 'pesonFilter',
    pure: false
})
export class PersonFilterPipe implements PipeTransform {
  transform(items: Person[], filter: Person): Person[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Person) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Person} person The person to compare to the filter.
   * @param {Person} filter The filter to apply.
   * @return {Person} True if person satisfies filters, false if not.
   */
  applyFilter(person: Person, filter: Person): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (person[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (person[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}