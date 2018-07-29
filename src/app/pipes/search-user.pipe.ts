import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../models/User";

@Pipe({
  name: "searchUser"
})
export class SearchUserPipe implements PipeTransform {
  transform(items: User[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    filter = removeAccents(filter);
    console.log("filtro sin acentos " + filter);
    return items.filter(
      item =>
        removeAccents(item.UserName)
          .toLowerCase()
          .indexOf(filter.toLowerCase()) !== -1
    );
  }
}

function removeAccents(s) {
  var r = s.toLowerCase();
  r = r.replace(new RegExp(/\s/g), "");
  r = r.replace(new RegExp(/[àáâãäå]/g), "a");
  r = r.replace(new RegExp(/[èéêë]/g), "e");
  r = r.replace(new RegExp(/[ìíîï]/g), "i");
  r = r.replace(new RegExp(/ñ/g), "n");
  r = r.replace(new RegExp(/[òóôõö]/g), "o");
  r = r.replace(new RegExp(/[ùúûü]/g), "u");

  return r;
}
