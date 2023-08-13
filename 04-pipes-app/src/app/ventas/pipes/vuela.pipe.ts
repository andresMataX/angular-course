import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(vuela: boolean) {
    return (vuela) ? 'vuela' : 'no vuela';
  }

}