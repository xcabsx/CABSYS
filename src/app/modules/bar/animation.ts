import {  animate, state, style, transition, trigger} from '@angular/animations';
import {AnimationEntryMetadata} from '@angular/core';

export const fundido =
  trigger('fadein', [
    transition(':enter', [
      style({
        opacity: 0,
        //transform: 'translateY(-75%) '

      }),
      animate('500ms linear',
        style({
          opacity: 1,
         // transform: 'translateY(0)'
        }))
    ]),

  ]);
