export enum Music {
    JAZZ, ROCK
}

export interface IMusician {
    addAlbum(album: Album): void;
}

export function display<T extends {toString(): void}>(array: T[]): void {
  array.forEach(element => console.log(element.toString()));
}

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

export class JazzMusician extends Musician{
    
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
    this.style = Music.JAZZ;
  }
}

export class RockStar extends Musician{
    
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
    this.style = Music.ROCK;
  }
}

export class Album{
    public title: string;

    constructor(title: string) {
      this.title = title;
    }

    public toString(): string {
      return this.title;
    }
}