import {  animate, state, style, transition, trigger} from '@angular/animations';
import {AnimationEntryMetadata} from '@angular/core';

export const fundido =
  trigger('fadein', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-30%) '

      }),
      animate('300ms linear',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
    ]),

  ]
  );

export const fundido1 =
  trigger('fadein2', [
      transition(':enter', [
        style({
          opacity: 0,
          //transform: 'translatey(-30%) '

        }),
        animate('300ms linear',
          style({
            opacity: 1,
          //  transform: 'translatey(0)'
          }))
      ]),

    ]
  );

