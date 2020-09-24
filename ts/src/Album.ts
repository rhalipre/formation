export class Album{
  public title: string;

  constructor(title: string) {
    this.title = title;
  }

  public toString(): string {
    return this.title;
  }
}