import { Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'lubgenerateDate'})
export class LubGenerateDatePipe implements PipeTransform {
  transform(value): string {
    const date = new Date(value * 1000);

    const day = date.getDate();
    let finalDay = day.toString();
    if (day <= 9) {
      finalDay = '0' + day;
    }

    let month = (date.getMonth() + 1 );

    const finalMonth = month.toString();


    if ( month <= 9) {
      finalMonth = '0' + month;
    }

    const result = finalDay + '/' + finalMonth + '/' + date.getFullYear();
    return result;
  }
}
