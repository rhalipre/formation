import {Music, Musician} from './Musician';
import {logged, StyleMusic} from './Decorators';

@StyleMusic(Music.JAZZ)
export class JazzMusician extends Musician{

  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }

  @logged
  public swing(): string {
    return 'I\'m swinging!';
  }
}