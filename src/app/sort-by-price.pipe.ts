import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(figurines: any[], order: string = 'asc'): any[] {
    if (order === 'asc') {
      return figurines.sort((a:any, b:any) => a.price - b.price)
    } else {
      return figurines.sort((a:any, b:any) => b.price - a.price)
    }
  }

}
