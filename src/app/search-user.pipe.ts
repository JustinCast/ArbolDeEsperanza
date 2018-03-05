import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/User';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(items: User[], filter: string): any {  
    if (!items || !filter) {  
        return items;  
    }  
    return items.filter(item => item.UserName.indexOf(filter) !== -1);  
}

}
