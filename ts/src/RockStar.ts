import {Music, Musician} from './Musician';
import {logged, StyleMusic} from './Decorators';

@StyleMusic(Music.ROCK)
export class RockStar extends Musician{

  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }

  @logged
  public shout(): string {
    return 'I\'m shouting!';
  }
}