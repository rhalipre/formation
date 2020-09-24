import {Album} from './Album';

export class Musician implements IMusician{
  public firstName: string;
  public lastName: string;
  public age: number;
  private _style: Music | undefined;
  private _albums: Album[] = [];

  constructor(fistName: string, lastName: string, age: number) {
    this.firstName = fistName;
    this.lastName = lastName;
    this.age = age;
  }

  public addAlbum(album: Album): void {
    this._albums.push(album);
  }

  get style(): Music | undefined {
    return this._style;
  }

  set style(style: Music | undefined) {
    this._style = style;
  }

  get albums(): Album[] {
    return this._albums;
  }

  public toString() : string {
    if(this.style !== undefined) {
      return `${this.firstName} ${this.lastName} plays ${Music[this.style]}`;
    }
    return `${this.firstName} ${this.lastName} plays`;
  }
}

export enum Music {
  JAZZ, ROCK
}

export interface IMusician {
  addAlbum(album: Album): void;
}