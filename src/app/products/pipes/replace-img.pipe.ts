import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceImg'
})
export class ReplaceImgPipe implements PipeTransform {

  transform(value: string): string | null {
    // Utilizamos una expresión regular para encontrar la URL dentro de la cadena
    //const regex = /https:\/\/[^\s]+/;
    const regex = /\["(https?:\/\/[^\s"]+)"]/;
    const match = value.match(regex);

    return match ? match[1] : null;
  }

}
