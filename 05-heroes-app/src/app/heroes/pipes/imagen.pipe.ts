import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if (!heroe.id || (heroe.hasOwnProperty('alt_img') && !heroe.alt_img)) {
      return 'assets/no-image.png';
    }

    return heroe.alt_img ? heroe.alt_img : `assets/heroes/${heroe.id}.jpg`;

  }

}
