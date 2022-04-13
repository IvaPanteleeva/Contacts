import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableIndex',
})
export class TableIndexPipe implements PipeTransform {
  transform(index: number): string {
    if (index < 10) {
      return '0' + index;
    }
    return index.toString();
  }
}
