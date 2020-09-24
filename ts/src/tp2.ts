export function returnPeopleAndLength(array: string[] = ['Miles', 'Mick']): [string, number][] {
  return array.map(name => [name, name.length]);
}

export function displayPeopleAndLength(array?: string[], literal?: boolean): void {
  if(literal) {
    returnPeopleAndLength(array)
      .filter(name => name.length <= 9)
      .forEach(([name, sizeCar]) => console.log(`${name} contient ${NumberToString[sizeCar]} caractères`));
  } else {
    returnPeopleAndLength(array)
      .forEach(([name, sizeCar]) => console.log(`${name} contient ${sizeCar} caractères`));
  }
}

export enum NumberToString {
    zero, un , deux, trois, quatre, cin, six, sept, huit, neuf,
}