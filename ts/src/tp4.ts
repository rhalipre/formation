import {JazzMusician} from './JazzMusician';
import {RockStar} from './RockStar';
import {Album} from './Album';
import display from './Display';
import {log} from './Utils';
import {Musician} from './Musician';

const miles = new JazzMusician('Miles', 'Davis', 89);
miles.addAlbum(new Album('Kind Of Blue'));
miles.addAlbum(new Album('Tutu'));

const musicians: Musician[] = [
  miles,
  new RockStar('Mick', 'Jagger', 72),
];

log('Bienvenue dans ma première application TypeScript');
display(musicians);
display(miles.albums);

for (const musician of musicians) {
  if (musician instanceof JazzMusician) {
    musician.swing();
  } else if (musician instanceof RockStar) {
    musician.shout();
  }
}