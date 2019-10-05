import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatime'
})
export class FormatimePipe implements PipeTransform {

    //fonction transform définit par angular lors de la création du pipe, il suffit de remplacer le value par time
    transform(time: any, ...args: any[]): any {
      //la fonction Math.trunc renvoie l'entier d'un nombre décimal, ici on divise l'entier par 60 car duration (fournit par angular) seule renvoit des secondes
      const currentTimeMinutes = Math.trunc(time / 60);
      //on rajoute un zéro dans le cas où les minutes sont inférieur à 10 pour le format MM en minutes sinon on renvoie les minutes tel quel
      const currentTimeMinutesFormatted = currentTimeMinutes < 10
        ? String(currentTimeMinutes).padStart(2, '0') //on ajoute zéro sur une chaine de deux
        : currentTimeMinutes;
      //On fait la même chose avec les secondes mais cette fois si avec modulo de 60 ex: si secondes = 180 alors 190%60 = 10 donc 10 secondes
      const currentTimeSecondes = Math.trunc(time % 60);
      const currentTimeSecondesFormatted = currentTimeSecondes < 10
        ? String(currentTimeSecondes).padStart(2, '0') : currentTimeSecondes;
      //on n'oublie pas d'afficher le résultat sinon rien ne vas apparaitre sur le template
      return `${currentTimeMinutesFormatted}:${currentTimeSecondesFormatted}`;
    }

}
